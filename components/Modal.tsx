import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { IoMdClose } from "react-icons/io";

type Props = {
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onChange,
  title,
  description,
  children,
}: Props) {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content
          className="
            w-full 
            md:w-[90vw] 
            h-full 
            md:h-auto 
            md:max-w-[450px]  
            max-h-full 
            md:max-h-[85vh] 
            p-[25px] 
            fixed 
            top-[50%] 
            left-[50%] 
            translate-x-[-50%] 
            translate-y-[-50%] 
            drop-shadow-md 
            border 
            border-neutral-700 
            rounded-md 
            bg-neutral-800 
            focus:outline-none
        "
        >
          <Dialog.Title className="mb-4 text-xl text-center font-bold">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-sm leading-normal text-center">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="w-[25px] h-[25px] text-neutral-400 absolute top-[10px] right-[10px] inline-flex items-center justify-center appearance-none rounded-full hover:text-white focus:outline-none">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
