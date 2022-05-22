import React from "react";


const Message = () => {
    return (
        <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
            <ul class="space-y-2">
                <li class="flex justify-end">
                    <div class="relative max-w-xl px-4 py-2 text-white bg-amber-400 rounded shadow">
                        <span class="block">how are you?</span>
                    </div>
                </li>
                <li class="flex justify-start">
                    <div class="relative max-w-xl px-4 py-2 text-black-700 rounded shadow bg-blue-100 ">
                        <span class="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Message;