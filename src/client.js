export function token() {
  const t = process.env.WIDGET_TOKEN;
  return t ? t : "secret-abc";
}
