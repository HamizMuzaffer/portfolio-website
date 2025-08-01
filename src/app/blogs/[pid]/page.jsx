"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { blogs } from "../../data/blogs";
import Image from "next/image";
import { FaCalendar, FaUser } from "react-icons/fa";
import { CommentModal } from "@/components/CommentModal";
import { useCommentStore } from "@/lib/useCommentStore";
const BlogPost = () => {
  const { pid } = useParams();
  const blog = blogs.find((blog) => blog.id === pid);

  const comments = useCommentStore((state) => state.comments);
  const setComments = useCommentStore((state) => state.setComments);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment?blogId=${pid}`);
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (pid) fetchComments();
  }, [pid]); // ✅ Do NOT include setComments

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">Blog not found</p>
      </div>
    );
  }

  const renderContent = (content) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.trim().startsWith("•")) {
        return (
          <li key={index} className="ml-6">
            {paragraph.trim().substring(1)}
          </li>
        );
      } else if (paragraph.trim() !== "") {
        return (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="bg-white dark:bg-secondary shadow-lg rounded-lg overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={600}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 dark:color-white">
            {blog.title}
          </h1>

          <div className="flex items-center text-gray-600 text-sm mb-4">
            <FaCalendar className="mr-2" />
            <span>{blog.date}</span>
            <FaUser className="ml-4 mr-2" />
            <span>Hamiz Muzaffer</span>
          </div>

          <div className="prose max-w-none">
            <p>{renderContent(blog.content)}</p>
          </div>
        </div>
      </article>

      <div className="my-4 flex items-center justify-center">
        <CommentModal />
      </div>
      <div className="flex flex-col w-full space-y-3">
        {comments.map((comment) => (
          <div key={comment.id} className="border p-3 rounded shadow-sm">
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm text-gray-500">{comment.email}</p>
            <p className="mt-2">{comment.message}</p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image
              src="/profile.jpg"
              alt="Author"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h3 className="font-bold">Hamiz Muzaffer</h3>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex space-x-4">
          {/* Add your social media icons here */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
