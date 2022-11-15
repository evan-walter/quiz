import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Evan() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className='xs:col-span-1 group flex flex-col text-center'>
        <button onClick={openModal} className='focus:outline-blue-500'>
          <Image
            src=''
            width={95}
            height={95}
            className='rounded-full hover:cursor-pointer'
            alt='Evan Image'
          />
        </button>
        <button
          onClick={openModal}
          className='col-span-1 mt-1 text-center transition focus:outline-blue-500 group-hover:scale-105'
        >
          View Bio
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-5xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all'>
                  <button
                    onClick={closeModal}
                    className='group flex w-full justify-end bg-blue-500 px-3 py-2 drop-shadow-lg'
                  >
                    <img
                      className='h-5 w-5 transition group-hover:scale-110'
                      src=''
                      alt='Close Button Icon'
                    />
                  </button>
                  <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div>
                      <img
                        src=''
                        className='h-full w-full object-cover'
                        alt='Evan Image'
                      />
                    </div>
                    <div className='flex flex-col justify-between bg-white pt-8'>
                      <div className='flex flex-col gap-4 px-10'>
                        <Dialog.Title as='h2' className='text-2xl font-bold'>
                          Hi, I&apos;m Evan.
                        </Dialog.Title>
                        <p>
                          I am a Full Stack Engineer with a Front End focus. 3+
                          years of web development experience specializing in
                          Node.js, React, and TypeScript. Enjoy building
                          scalable web infrastructure with excellent user
                          interfaces. Passionate about open source and developer
                          tooling.
                        </p>
                      </div>
                      <button
                        onClick={closeModal}
                        className='group mt-8 w-full bg-gray-200 px-5 py-4 text-center font-semibold uppercase text-gray-600'
                      >
                        <p className='transition group-hover:scale-105'>
                          Close
                        </p>
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
