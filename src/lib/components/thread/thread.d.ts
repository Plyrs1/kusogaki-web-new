interface CommonPostItem {
  id: string;
  author: string;
  avatar: string;
  content: string;
  likes?: number;
  replies?: number;
  createdAt: number;
}

interface PostItem extends CommonPostItem {

}

interface ThreadReplyItem extends CommonPostItem {
  subitem?: Array<ThreadReplyItem>;
}