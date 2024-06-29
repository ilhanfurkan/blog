'use client';
import blogList from '@/config/blog.config.json';
import { useParams } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import Container from '@/components/layout/container';
import AppLayout from '@/components/layout/appLayout';
import CardList from '@/components/shared/cardList';
import Image from 'next/image';

export default function BlogsDetail() {
  const id = useParams();
  const blog = blogList.find((x: any) => x.id == id?.slug);
  return (
    <AppLayout>
      <div className={styles.blog_detail_container}>
        <div className={styles.blog_detail_banner}></div>
        <Container>
          <div className={styles.blog_detail_content}>
            <h1>{blog?.title}</h1>
            <div className={styles.blog_image}>
              <Image
                src={blog?.thumbnail as string}
                alt={blog?.title as string}
                fill
              />
            </div>

            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: blog?.description || '' }}
            />
          </div>
        </Container>
        {blogList && <CardList data={blogList} title={'Some Blog List'} />}
      </div>
    </AppLayout>
  );
}
