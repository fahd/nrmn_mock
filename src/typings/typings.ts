export interface QuestionContentType {
  post_id: number
  avatar: string
  content: string
  first_name: string
  last_name: string
  timestamp: string
  username: string
  role: string
}

export interface ReplyType {
  avatar: string
  content: string
  first_name: string
  last_name: string
  likes: Set<number>
  post_id: number
  reply_id: number
  role: string
  timestamp: string
  user_id: number
  username: string
}

export interface Replies {
  replies: ReplyType[]
}

export interface User {
  user_id: number
  username: string
  first_name: string
  last_name: string
  email?: string
  avatar: string
  role: string
}

export interface CreatePostType {
  user: User
}

export interface ModalProps {
  onClose: () => void
  user: User
}

export interface PostType {
  post_id: number
  user_id: number
  username: string
  first_name: string
  last_name: string
  avatar: string
  content: string
  timestamp: string
  user: UserType
  replies: ReplyType[]
}

export interface UserType {
  user_id: number
  username: string
  first_name: string
  last_name: string
  email: string
  avatar: string
  role: string
}

export interface PostFeedProps {
  posts: PostType[]
  user: UserType
}

export interface CreateMessageType {
  onSubmit: () => void
  contentRef: React.RefObject<HTMLDivElement>
  setPostContent: (content: string) => void
  onChange: (content: string) => void // Updated from setPostContent
  placeholder: string
  type: string
}
