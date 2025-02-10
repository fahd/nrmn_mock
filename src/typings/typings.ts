export interface QuestionContentType {
  post_id: number
  avatar: string
  content: string
  first_name: string
  last_name: string
  timestamp: string
  username: string
  user_id: number
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
  style?: string
  fontSize?: string
  me: number
  likeReply: (post_id: number, reply_id: number, user_id: number) => void
}

export interface Replies {
  replies: ReplyType[]
}

export interface CreatePostType {
  user: User
}

export interface RightPanelFeed {
  conversations: Conversation[]
  users: User[]
  user: User
}
export interface RecentChatsType {
  conversations: Conversation[]
  users: User[]
}

export interface MainFeedType {
  user: User
  posts: PostType[]
  replies: ReplyType[]
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
  user: User
  replies: ReplyType[]
  role: string
  likes: {
    [key: string]: boolean
  }
}

export interface User {
  user_id: number
  username: string
  first_name: string
  last_name: string
  email?: string
  avatar: string
  role: string
  city?: string
  state?: string
  university?: string
  title?: string
  badge: number
  areas_of_focus?: string[]
  about?: React.RefObject<HTMLDivElement>
}

export interface NavUserType {
  first_name: string
  last_name: string
  avatar: string
  user_id: number
  username: string
}

export interface Message {
  user_id: number
  content: string
  timestamp: string
  read: boolean
  user: User
}

export interface LastMessage {
  user_id: number
  content: string
  timestamp: string
}

export interface Conversation {
  conversation_id: string
  participant: number
  last_message: LastMessage
  unread_count: number
  messages: Message[]
  timestamp: string
  user: User
}

export interface PostFeedProps {
  posts: PostType[]
  user: User
}

export interface CreateMessageType {
  contentRef: React.RefObject<HTMLDivElement>
  setPostContent?: (content: string) => void
  onChange: (content: string) => void
  onEnterSubmit: () => void
  placeholder: string
  type?: string
  styles?: string
}

export interface QuestionAnswerType {
  replies: ReplyType[]
  user: User
  post_id: number
  likeReply: (post_id: number, reply_id: number, user_id: number) => void
}

export interface DataContextType {
  posts: PostType[]
  replies: ReplyType[]
  users: User[]
  conversations: Conversation[]
  addPost: (newPost: PostType) => void
  addReply: (
    post_id: number,
    is_new_post: boolean,
    new_reply: React.RefObject<HTMLDivElement>
  ) => void
  likeReply: (post_id: number, reply_id: number, user_id: number) => void
  addConversationMessage: (
    conversation_id: string,
    content: React.RefObject<HTMLDivElement>,
    user_id: number
  ) => void
}

export interface ConversationItemType {
  conversation: Conversation
  user: User
  activeConversationId: string
  onChangeConversation: (conversation_id: string) => void
}

export interface ActiveConversationType {
  conversation: Conversation
  me: User
  users: User[]
  setMessageContent: () => void
  onEnterSubmit: () => void
  contentRef: React.RefObject<HTMLDivElement>
}

export interface ConversationMessageType {
  conversation: Conversation
}

export interface ConnectNetworkType {
  users: User[]
}
