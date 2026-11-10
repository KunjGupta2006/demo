import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { JOURNAL_DATA } from "@/data/journal";

export const metadata = {
  title: "Editorial Journal & Hair Discourse",
  description:
    "Essays on cranial dry-cutting architecture, French kaolin clay chroma, and scalp ecosystem trichology by Care4U Studio.",
};

export default function JournalPage() {
  const [featuredPost, ...otherPosts] = JOURNAL_DATA;

  return (
    <ShellLayout>
      {/* Header */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-3">
              [Editorial Discourse]
            </span>
            <Heading level={1} size="display-xl" className="mb-4">
              The Studio Journal
            </Heading>
            <p className="text-[16px] text-[#666159] leading-relaxed max-w-2xl font-light">
              Critical essays examining cranial geometry, open-air lightening chemistry, and the restorative stillness of living hair.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Lead Story */}
      {featuredPost && (
        <Section variant="surface" padding="xl" hairlineBottom={true}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] bg-[#E5E0D6] border border-[rgba(23,22,20,0.1)] overflow-hidden group">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover grayscale contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#121110]/85 text-[#F8F6F1] font-mono text-[10px] tracking-widest uppercase px-3 py-1">
                  FEATURED DISPATCH · {featuredPost.readTime}
                </div>
              </div>

              <div className="lg:col-span-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B38E58] block mb-2">
                  {featuredPost.category} · {featuredPost.publishedAt}
                </span>
                <Link href={`/journal/${featuredPost.slug}`}>
                  <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-[#171614] hover:text-[#B38E58] transition-colors leading-tight mb-4">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-[15px] text-[#666159] leading-relaxed mb-6 font-light">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-3 text-[12px] font-mono text-[#666159] border-t border-[rgba(23,22,20,0.08)] pt-4">
                  <span>Author: {featuredPost.author.name}</span>
                  <span>•</span>
                  <span>{featuredPost.author.role}</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Other Essays Grid */}
      <Section variant="light" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#EFECE5] border border-[rgba(23,22,20,0.08)] overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#E5E0D6] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover grayscale group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#121110]/80 text-[#F8F6F1] font-mono text-[9px] uppercase px-2 py-0.5">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-7">
                    <span className="font-mono text-[10px] uppercase text-[#666159] block mb-2">
                      {post.publishedAt} · {post.readTime}
                    </span>
                    <Link href={`/journal/${post.slug}`}>
                      <h3 className="font-serif text-[1.6rem] text-[#171614] hover:text-[#B38E58] transition-colors leading-snug mb-3">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-[13px] text-[#666159] leading-relaxed font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-[rgba(23,22,20,0.06)] mt-2 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-[#666159]">{post.author.name}</span>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="editorial-link uppercase text-[#171614] hover:text-[#B38E58] font-medium"
                  >
                    Read Essay →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
