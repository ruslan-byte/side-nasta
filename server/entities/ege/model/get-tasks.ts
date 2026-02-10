import { IEgeEventTask } from "~~/types/ege.type";
import { eventsStorage } from "~~/server/storage/ege/events";

export function getEventTaskData(themeIds: number[]): IEgeEventTask {
  let localEvents = [
    ...eventsStorage.filter((item) => themeIds.includes(item.themeId)),
  ];
  function getRandomEventWithRemove() {
    const randomIndex =
      Math.floor(Math.random() * (localEvents.length - 0)) + 0;

    const randomEvent = localEvents[randomIndex];

    localEvents = localEvents.filter(
      (thisEvent) => thisEvent.id !== randomEvent.id,
    );
    return (
      randomEvent ?? {
        id: 0,
        label: "Слишком мало тем для корректной работы генератора (год 0)",
        themeId: 0,
        year: 0,
      }
    );
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
