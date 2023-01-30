export function randomDate(): Date {
  const from = new Date(2023, 0, 1);
  const to = new Date();

  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime()),
  );
}

export function random(min: number, max: number): number {
  const left = Math.ceil(min);
  const right = Math.floor(max);

  return Math.floor(Math.random() * (right - left + 1)) + left;
}
