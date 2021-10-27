export function displayNumber(id) {
  if (id < 100) {
    return "#0" + id;
  } else {
    return "#" + id;
  }
}

export function displayName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
