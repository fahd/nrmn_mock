import React, { createContext, useState, ReactNode } from 'react'
import postData from '../mocks/posts.json'

interface Post {
  post_id: number
  user_id: number
  username: string
  first_name: string
  last_name: string
  avatar: string
  content: string
  timestamp: string
}

interface PostContextType {
  posts: Post[]
  addPost: (newPost: Post) => void
}
/* 
Since we are manipulating client-side data only, we will create a linked-list to first take in a sample list of posts. 

Then, our application will add in new posts, and we will update our linked-list to point to the most recent post.
*/

// Define a node in the linked list
class PostNode {
  post: Post
  next: PostNode | null = null

  constructor(post: Post) {
    this.post = post
  }
}

// Define the Linked List class
class PostLinkedList {
  private head: PostNode | null = null

  constructor(initialMessages: Post[]) {
    this.insertInitialPosts(initialMessages)
  }

  private insertInitialPosts(initialPosts: Post[]) {
    initialPosts.forEach((post) => this.appendPost(post))
  }

  addMessage(newPost: Post) {
    const newNode = new PostNode(newPost)
    newNode.next = this.head
    this.head = newNode
  }

  private appendPost(post: Post) {
    const newNode = new PostNode(post)
    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }

  getPosts(): Post[] {
    const posts: Post[] = []
    let current = this.head
    while (current) {
      posts.push(current.post)
      current = current.next
    }
    return posts
  }
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState(new PostLinkedList(postData))

  const addPost = (newPost: Post) => {}

  return (
    <PostContext.Provider value={{ posts: posts.getPosts(), addPost }}>
      {children}
    </PostContext.Provider>
  )
}
