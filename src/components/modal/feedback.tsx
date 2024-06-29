'use client';
import React, { useState } from 'react';
import styles from './feedback.module.scss';
import Button from '../shared/button';
import Textarea from '../shared/textarea';
import Input from '../shared/input';
import Icon from '../shared/icon';
import axios from 'axios';

interface FeedbackModalProps {
  isOpen: boolean;
  handleIsOpen: () => void;
}

function FeedbackModal({ isOpen, handleIsOpen }: FeedbackModalProps) {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirm, setConfirm] = useState({
    color: 'var(--color-secondary)',
    transform: 'scale(0.5)',
    transition: '0.5s',
  });
  const [clicked, setClicked] = useState({
    frown: false,
    meh: false,
    smile: false,
  });
  const [form, setForm] = useState({
    emoji: '',
    name: '',
    email: '',
    suggestion: '',
  });

  function handleClickEmojis(emojiType: string) {
    switch (emojiType) {
      case 'frown':
        return setClicked({
          frown: true,
          meh: false,
          smile: false,
        });
      case 'meh':
        return setClicked({
          frown: false,
          meh: true,
          smile: false,
        });
      case 'smile':
        return setClicked({
          frown: false,
          meh: false,
          smile: true,
        });
    }
  }

  const config = {
    to: 'furkan.llhan@hotmail.com',
    htmlFile: { htmlName: '/template/feedback', title: 'Sym Feedback' },
    mailRequest: form,
  };

  console.log(config);

  async function handleSuccessSuggestion(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    try {
      const response = await axios.post('/api/feedback', config);

      setSubmitSuccess(true);

      setTimeout(() => {
        setConfirm({
          color: 'green',
          transform: 'scale(0.8)',
          transition: '0.5s',
        });
      }, 2000);

      setTimeout(() => {
        handleIsOpen();
        setSubmitSuccess(false);
        setClicked({
          frown: false,
          meh: false,
          smile: false,
        });
        setConfirm({
          color: 'var(--color-secondary)',
          transform: 'scale(0.5)',
          transition: '0.5s',
        });
        setForm({
          emoji: '',
          name: '',
          email: '',
          suggestion: '',
        });
      }, 2800);
    } catch (error) {
      alert(`Error in sending feedback. Please try again later. ${error}`);
    }
  }

  function handleChange(
    type: string,
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    if (type === 'name' || type === 'email' || type === 'suggestion') {
      setForm((x) => ({ ...x, [type]: e?.target.value }));
    } else {
      setForm((x) => ({ ...x, emoji: type }));
    }
  }

  return (
    <React.Fragment>
      <div className={isOpen ? styles.container : styles.container_hidden}>
        <div className={styles.modal}>
          <div className={styles.close} onClick={() => handleIsOpen()}>
            <Icon icon={'close'} />
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              Write a suggestion for improve myself.
            </div>
            <form
              onSubmit={(event) => {
                handleSuccessSuggestion(event);
              }}>
              <div className={styles.body}>
                <div className={styles.emojis_part}>
                  <div
                    className={
                      clicked.frown ? styles.frown_click : styles.frown
                    }
                    onClick={() => {
                      handleClickEmojis('frown'), handleChange('Bad');
                    }}>
                    <Icon icon={'frown'} />
                  </div>
                  <div
                    className={clicked.meh ? styles.meh_click : styles.meh}
                    onClick={() => {
                      handleClickEmojis('meh'), handleChange('Meh');
                    }}>
                    <Icon icon={'meh'} />
                  </div>
                  <div
                    className={
                      clicked.smile ? styles.smile_click : styles.smile
                    }
                    onClick={() => {
                      handleClickEmojis('smile'), handleChange('Good');
                    }}>
                    <Icon icon={'smile'} />
                  </div>
                </div>
                <Input
                  value={form.name}
                  placeholder="Enter your name"
                  type={'text'}
                  onChange={(e) => handleChange('name', e)}></Input>
                <Input
                  value={form.email}
                  placeholder="Enter your email"
                  type={'text'}
                  onChange={(e) => handleChange('email', e)}></Input>
                <Textarea
                  value={form.suggestion}
                  placeholder="Enter your suggestion"
                  onChange={(e) => handleChange('suggestion', e)}></Textarea>
                <Button
                  variant="secondary"
                  title={'Submit'}
                  typeButton={'normal'}
                  size="expand"
                  disabled={
                    form.emoji === '' ||
                    form.name === '' ||
                    form.suggestion === ''
                      ? true
                      : false
                  }
                />
              </div>
            </form>
            {submitSuccess && (
              <div className={styles.successSubmit}>
                <div className={styles.primary}>
                  <div>
                    Thank you for your feedback. We appreciate your input.
                  </div>
                  <div
                    style={{
                      color: `${confirm.color}`,
                      transform: `${confirm.transform}`,
                      transition: `${confirm.transition}`,
                    }}>
                    <Icon icon={'check_square'} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeedbackModal;
