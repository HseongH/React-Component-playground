import { MouseEvent, RefObject } from "react";

/**
 * @typedef ref
 * @prop {RefObject<HTMLElement>}
 */

/**
 * @typedef event
 * @prop {MouseEvent}
 */

/**
 *
 * @param {ref} ref
 * @param {event} event
 * @return {void}
 */
export function createRipple(ref: RefObject<HTMLElement>, event: MouseEvent) {
  const ripple = document.createElement("span");
  const target = ref?.current;

  if (target) {
    target.classList.add("contained-ripple");
    ripple.setAttribute("class", "ripple");
    const max = Math.max(target.offsetWidth, target.offsetHeight);

    ripple.style.width = max * 2 + "px";
    ripple.style.height = max * 2 + "px";

    const rect = target.getBoundingClientRect();

    ripple.style.left = event.clientX - rect.left - max + "px";
    ripple.style.top = event.clientY - rect.top - max + "px";

    target.appendChild(ripple);

    setTimeout(() => target.removeChild(ripple), 300);
  }
}
