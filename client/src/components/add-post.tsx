import { useState } from "react";
import { useCreate } from "../hooks/use-post"

export const AddPost = () => {

 const { mutate, isPending } = useCreate();
 const [form, setForm] = useState({
  title: "",
  content: "",
  userId:"2", // author userId:2 present in db then create blog otherwise not
 })
 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
 };
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!form.title || !form.content) return;
  mutate(form); // form is { title, content }
 };
 return (
  <form onSubmit={handleSubmit} className="space-y-4">
   <input
    type="text"
    name="title"
    placeholder="Post title"
    value={form.title}
    onChange={handleChange}
    disabled={isPending}
    className="border p-2 rounded w-full"
   />
   <textarea
    name="content"
    placeholder="Post content"
    value={form.content}
    onChange={handleChange}
    disabled={isPending}
    className="border p-2 rounded w-full"
   />
   <button type="submit" disabled={isPending} className="bg-blue-500 text-white p-2 rounded">
    {isPending ? "Creating..." : "Create Post"}
   </button>
  </form>
 )
}
