import { writable } from "svelte/store";

export const counter = writable(0);
counter.subscribe((value) => console.log("counter", value));