interface ThreadReplyItem {
    author: string;
    avatar: string;
    content: string;
    subitem?: Array<ThreadReplyItem>;
}