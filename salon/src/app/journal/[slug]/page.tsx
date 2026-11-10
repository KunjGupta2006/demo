import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { JOURNAL_DATA } from "@/data/journal";

export function generateStaticParams() {
  return JOURNAL_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = JOURNAL_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = JOURNAL_DATA.filter((p) => p.id !== post.id);

  return (
    <ShellLayout>
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container size="narrow">
          <div className="flex items-center space-x-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B38E58] mb-4">
            <Link href="/journal" className="hover:underline">
              JOURNAL
            </Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          <Heading level={1} size="display-xl" className="mb-6">
            {post.title}
          </Heading>

          <div className="flex items-center space-x-4 text-[12px] font-mono text-[#666159] pb-8 border-b border-[rgba(23,22,20,0.1)] mb-10">
            <span>By {post.author.name} ({post.author.role})</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Lead Image */}
          <div className="relative aspect-[16/10] bg-[#EFECE5] border border-[rgba(23,22,20,0.1)] overflow-hidden mb-12 shadow-sm">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover grayscale"
            />
          </div>

          {/* Article Prose */}
          <div className="prose prose-lg max-w-none text-[#171614] leading-[1.8] space-y-6 text-[17px] font-light font-sans">
            <p className="font-serif text-[1.4rem] leading-snug italic text-[#171614] border-l-2 border-[#B38E58] pl-6 my-8">
              “{post.excerpt}”
            </p>

            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-[#171614]/85">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Footnote */}
          <div className="mt-16 pt-8 border-t border-[rgba(23,22,20,0.1)] flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#666159] block">
                Author & Discipline
              </span>
              <span className="font-serif text-[1.3rem] text-[#171614]">
                {post.author.name}
              </span>
              <span className="font-mono text-[11px] text-[#B38E58] block">
                {post.author.role} at Care4U Studio Paris
              </span>
            </div>

            <Button href="/booking" variant="brass" size="sm">
              Reserve Coiffure Session
            </Button>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[rgba(23,22,20,0.1)]">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#B38E58] block mb-6">
                [Further Discourse]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/journal/${rel.slug}`}
                    className="p-6 bg-[#EFECE5] border border-[rgba(23,22,20,0.08)] block group"
                  >
                    <span className="font-mono text-[10px] uppercase text-[#666159] block mb-1">
                      {rel.readTime}
                    </span>
                    <h4 className="font-serif text-[1.3rem] text-[#171614] group-hover:text-[#B38E58] transition-colors leading-tight">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </ShellLayout>
  );
}
