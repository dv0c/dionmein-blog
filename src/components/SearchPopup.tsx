"use client";
import React, { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { api } from "@/lib/api";
import { Post, PostsWithMeta, Tag, TagsData } from "@/types";
import Link from "next/link";

interface Props {
  isOpen: any;
  setOpen: any;
}

export function SearchPopup({ isOpen, setOpen }: Props) {
  const [post, setPost] = useState<PostsWithMeta>();
  const [tags, setTag] = useState<TagsData>();
  const [postInput, setPostInput] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    api("posts", {
      fields: "title,slug",
      order: "published_at DESC",
      // filter: "posts:" + postInput,
    }).then(({ data }) => {
      setPost(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    api("tags", {
      fields: "name,slug",
      order: "published_at DESC",
      // filter: "posts:" + postInput,
    }).then(({ data }) => {
      setTag(data);
      setLoading(false);
    });
  }, []);

  return (
    <CommandDialog open={isOpen} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Posts">
          {post?.posts.map((item: Post, i: number) => (
            <CommandItem key={i}>
              <Link href={"/article/" + item.slug}>{item.title}</Link>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Tags">
          {tags?.tags.map((item: Tag, i: number) => (
            <CommandItem key={i}>
              <Link href={"/tag/" + item.slug}>
                <span className="text-muted-foreground mr-2">#</span>
                {item.name}
              </Link>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
