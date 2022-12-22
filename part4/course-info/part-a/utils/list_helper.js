const dummy = (blogs) => {
  if (blogs instanceof Array) return 1
}

// {
//   _id: "5a422a851b54a676234d17f7",
//     title: "React patterns",
//     author: "Michael Chan",
//     url: "https://reactpatterns.com/",
//     likes: 7,
//     __v: 0
// }

const totalLikes = (blogs) => {
  const like_summer = (acc, blog) => acc + blog.likes

  return blogs.reduce(like_summer, 0)
}

const favoriteBlog = (blogs) => {
  const blog_formater = (blog) => {
    return ({
      title: blog.title,
      author: blog.author,
      likes: blog.likes
    })
  }

  const most_liked_reducer = (favorite, blog) => {
    if(favorite.likes === undefined) return blog_formater(blog)

    return blog_formater(favorite.likes < blog.likes ? blog:favorite)
  }

  return blogs.reduce(most_liked_reducer, {})
}

const mostBlogs = (blogs) => {
  const author_map = new Map()
  blogs.map(blog => {
    if (author_map.has(blog.author)) {
      author_map.set(blog.author, author_map.get(blog.author)+1)
      return
    }
    author_map.set(blog.author, 1)
  })

  let author_with_most_blogs = [0,0]
  for(let author_item of author_map.entries()){
    if(author_item[1] > author_with_most_blogs[1]) {
      author_with_most_blogs = author_item
    }
  }

  return ({
    author: author_with_most_blogs[0],
    blogs: author_with_most_blogs[1],
  })
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
}
