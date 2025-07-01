'use client';

// import Link from 'next/link';
// import React, {  useEffect, useState,  } from 'react';
// import { UserContext } from '@/context/UserContext2';
// import styles from '@/features/styles/navbar.module.css';
// import useWindowSize from "@/../hooks/size";
// import CartDrawer from '@/components/cart/CartDrawer';
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  // const [openFavorite, setOpenFavorite] = useState(false);
  // const [search, setSearch] = useState(false);
  // const [metr] = useState(768);
  // const { width } = useWindowSize();
  // const { user } = useContext(UserContext);
  // const [isPending, startTransition] = useTransition();
  // const router = useRouter();

  // مدیریت باز و بسته شدن منوی موبایل
  // useEffect(() => {
  //   if (width) {
  //     setOpen(width <= metr);
  //   }
  // }, [width, metr]);

  // نمایش پیام "صبر کنید" هنگام انتقال
//  useEffect(() => {
//     let toastId: string | undefined;
//     if (isPending) {
//       toastId = toast.loading('صبر کنید...');
//     } else if (toastId) {
//       toast.dismiss(toastId);
//     }
//     return () => {
//       if (toastId) toast.dismiss(toastId);
//     };
//   }, [isPending]); 

  // const handleFavorite = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   setOpenFavorite(!openFavorite);
  // };

  // تابع برای مدیریت انتقال با پیام
  // const navigateWithLoading = (path: string) => {
  //   startTransition(() => {
  //     router.push(path);
  //   });
  // };

  return (
    <section id="profile"
    className="flex fixed justify-between items-center  w-[100px] mx-auto  bottom-24  bg-[#269768]">
    
      profile

    </section>
  );
};

export default Navbar;