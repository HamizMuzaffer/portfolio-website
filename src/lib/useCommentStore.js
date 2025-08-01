// lib/useCommentStore.js

import { create } from 'zustand';

export const useCommentStore = create((set) => ({
  comments: [],
  setComments: (updater) =>
    set((state) => ({
      comments:
        typeof updater === 'function' ? updater(state.comments) : updater,
    })),
  addComment: (comment) =>
    set((state) => ({ comments: [...state.comments, comment] })),
}));
