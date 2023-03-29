import React from "react";

export function Footer({}) {
  return (
    <footer class="  ">
      <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
        <hr class="my-6 border-gray-400 sm:mx-auto  lg:my-8" />
        <span class="block text-sm text-center text-gray-400">
          © 2023{" "}
          <a href="https://HungryDevs.com/" class="hover:underline">
            HungryDevs
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
