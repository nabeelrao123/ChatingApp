import React from "react";
import { Socket } from "socket.io-client";
import socketio from "socket.io-client";




function Join() {
    return (
        <a
            class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
            <img class="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
            <div class="w-full pb-2">
                <div class="flex justify-between">
                    <span class="block ml-2 font-semibold text-gray-600">Jhon Don</span>
                    <span class="block ml-2 text-sm text-gray-600">25 minutes</span>
                </div>
                <span class="block ml-2 text-sm text-gray-600">bye</span>
            </div>
        </a>
    )
}

export default Join;