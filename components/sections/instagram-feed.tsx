"use client"

import { motion } from "framer-motion"
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const posts = [
  { id: 1, likes: "2.4K", comments: "156", image: "/images/course-basics.jpg" },
  { id: 2, likes: "3.1K", comments: "203", image: "/images/course-volume.jpg" },
  { id: 3, likes: "1.8K", comments: "98", image: "/images/hero-isabella.jpg" },
  { id: 4, likes: "4.2K", comments: "312", image: "/images/course-basics.jpg" },
  { id: 5, likes: "2.9K", comments: "187", image: "/images/course-volume.jpg" },
  { id: 6, likes: "3.5K", comments: "245", image: "/images/hero-isabella.jpg" },
]

export function InstagramFeed() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            <Instagram className="w-4 h-4" />
            Instagram
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Siga{" "}
            <span className="text-primary">@isabellamonteiro</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Acompanhe dicas exclusivas, bastidores e transformações incríveis no nosso Instagram
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={post.image}
                alt={`Post Instagram ${post.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4 text-white">
                  <span className="flex items-center gap-1 text-sm font-medium">
                    <Heart className="w-4 h-4 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="https://instagram.com/isabellamonteiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
