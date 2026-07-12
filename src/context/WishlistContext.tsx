"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type WishlistContextType = {
  wishlist: number[];
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const WishlistContext =
  createContext<WishlistContextType | null>(null);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<number[]>([]);

  function addToWishlist(id: number) {
    setWishlist((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  }

  function removeFromWishlist(id: number) {
    setWishlist((prev) =>
      prev.filter((item) => item !== id)
    );
  }

  function isFavorite(id: number) {
    return wishlist.includes(id);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isFavorite,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}