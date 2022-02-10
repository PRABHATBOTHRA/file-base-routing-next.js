import { useRouter } from 'next/router'
import React from 'react'

const BlogPostPage = () => {
    const router = useRouter();
    console.log("Router PathName blog" + router.pathname);
    console.log("Router Query blog" + router.query);
    return (
        <div>
            <h1>The Blog Page With Diffrent Url</h1>
        </div>
    )
}

export default BlogPostPage
