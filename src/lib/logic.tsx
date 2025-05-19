"use client";
import { useEffect } from "react";

const // interactive triggers
  secretAt = 6,
  crashAt = 9;

const // text strings
  secretText = "Your Secret Phrase is:",
  secretPhrase = "HACK THE PLANET!",
  crashText = "Oh, n0ez!",
  brokenText = "You broke it!";

export function Main() {
  useEffect(() => {
    // front
    console.log(`
·▄▄▄▄  ▪  • ▌ ▄ ·. ▄▄▄ . ▐ ▄ .▄▄ · ▪         ▐ ▄
██▪ ██ ██ ·██ ▐███▪▀▄.▀·•█▌▐█▐█ ▀. ██ ▪     •█▌▐█
▐█· ▐█▌▐█·▐█ ▌▐▌▐█·▐▀▀▪▄▐█▐▐▌▄▀▀▀█▄▐█· ▄█▀▄ ▐█▐▐▌
██. ██ ▐█▌██ ██▌▐█▌▐█▄▄▌██▐█▌▐█▄▪▐█▐█▌▐█▌.▐▌██▐█▌
▀▀▀▀▀• ▀▀▀▀▀  █▪▀▀▀ ▀▀▀ ▀▀ █▪ ▀▀▀▀ ▀▀▀ ▀█▄▀▪▀▀ █▪
Hey, you-- join us!  https://dimensionsoftware.com
`);

    let // game state variables
      mult = 1,
      isSecret = false,
      lastWasSecret = false;

    const // helper fns
      $ = (sel: string) => document.querySelector(sel),
      getElementById = (id: string) => document.getElementById(id),
      setContent = (sel: string, text: string) => {
        const e = $(sel);
        if (e) {
          if (e.classList.contains("boom")) {
            e.classList.remove("boom");
            e.textContent = text;
          } else {
            const bang = mult === 1 ? "" : "!".repeat(parseInt(String(mult)));
            e.textContent = text + bang;
            e.classList.add("boom");
          }
        }
      };

    // main events
    // ---------
    let timer: NodeJS.Timeout | null = null;
    const // helper fns
      playSound = (src: string, volume: number) => {
        const audio = new Audio(src);
        audio.volume = volume / 125;
        audio.play();
      },
      scaleAvatar = () => {
        getElementById("avatar")?.setAttribute(
          "style",
          `transform: scale(${1 + (mult / 2) * 1.0025}) translate(-50px, -25px)`
        );
      };
    document.addEventListener("mousedown", () => {
      playSound("/sfx/click.mp3", 40 / mult);
      if (timer) clearTimeout(timer);
      // set content
      setContent("h4", crashText);
      setContent("h3", secretPhrase);
      // secret?
      if (mult >= secretAt) {
        isSecret = true;
        // render starfield
        require("../components/ui/starfield.js");
        playSound("/sfx/secret.mp3", 50 / mult);
        document.documentElement.classList.add("secret");
        getElementById("splash-cursor")?.classList.add("opacity-100");
        getElementById("tagline-morphs")?.remove();
      }
      // crash?
      if (mult >= crashAt) {
        document.documentElement.classList.add("crash");
        playSound("/sfx/crash.mp3", 100);
      }
      // shake!
      getElementById("app")?.classList.add("shake");
      getElementById("avatar")?.classList.add("rotate-15");
      if (isSecret) {
        $("a.footer")?.removeAttribute("href");
      } else {
        getElementById("avatar")?.removeAttribute("style");
      }
    });

    document.addEventListener("mouseup", () => {
      setContent("h4", secretText);
      getElementById("avatar")?.classList.remove("rotate-15");
      getElementById("app")?.classList.remove("shake");
      mult = mult * 2 > 18 ? 18 : mult * 2;
      if (isSecret && !lastWasSecret) {
        lastWasSecret = true;
      } else if (lastWasSecret) {
        timer = setTimeout(scaleAvatar, 500); // reset
        scaleAvatar();
      }
    });

    document.addEventListener("click", function (e) {
      // @ts-expect-error it's there
      if (e.target && e.target.closest(".crash")) {
        const footer = $(".footer");
        if (footer) footer.setAttribute("title", brokenText);
        e.preventDefault();
      }
    });

    setInterval(() => {
      // reset ui
      mult = 1;
    }, 500);
  }, []);

  return <div></div>;
}
