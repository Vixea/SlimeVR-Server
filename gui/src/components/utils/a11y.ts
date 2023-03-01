export function a11yClick(event: React.KeyboardEvent | React.MouseEvent) {
  if (event.type === 'click') {
    return true;
  } else if (event.type === 'keydown') {
    const keyboard = event as React.KeyboardEvent;
    return keyboard.key === 'Enter' || keyboard.key === ' ';
  }
}

export async function writeClipboard(...objs: object[]) {
  const type = 'application/json';
  const data = [];

  for(const obj of objs) {
    const blob = new Blob([JSON.stringify(obj)], { type });
    data.push(new ClipboardItem({ [type]: blob }));
  }

  return navigator.clipboard.write(data);
}
