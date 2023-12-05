'use client';
import { blogList } from '@/config/blog.config';
import { useParams } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import Container from '@/components/layout/container';

export default function BlogsDetail() {
  const id = useParams();
  const blog = blogList.find((x: any) => x.id == id?.slug);

  console.log(blog);

  return (
    <React.Fragment>
      <div className={styles.blog_detail_container}>
        <div className={styles.blog_detail_banner}>
          <h1>{blog?.title}</h1>
          <img src={blog?.thumbnail} alt={blog?.title} />
        </div>
        <Container>
          <div className={styles.blog_detail_content}>
            <div className={styles.content}>{blog?.description}</div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
