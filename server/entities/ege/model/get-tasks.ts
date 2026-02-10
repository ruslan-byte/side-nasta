import { IEgeEventTask } from "~~/types/ege.type";
import { eventsStorage } from "~~/server/storage/ege/events";

export function getEventTaskData(): IEgeEventTask {
  let localEvents = [...eventsStorage];
  function getRandomEventWithRemove() {
    const randomIndex =
      Math.floor(Math.random() * (localEvents.length - 0)) + 0;

    const randomEvent = localEvents[randomIndex];

    localEvents = localEvents.filter(
      (thisEvent) => thisEvent.id !== randomEvent.id,
    );
    return randomEvent;
  }
  const randomEvents = [
    getRandomEventWithRemove(),
    getRandomEventWithRemove(),
    getRandomEventWithRemove(),
    getRandomEventWithRemove(),
    getRandomEventWithRemove(),
    getRandomEventWithRemove(),
  ];

  return {
    events: randomEvents.slice(0, 4),
    years: randomEvents.map((event) => event.year).sort((a, b) => a - b),
  };
}
