import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-8">
      <h1 className="text-xs">text-xs: Hello World (12px)</h1>
      <h2 className="text-sm">text-sm: Hello World (14px)</h2>
      <h3 className="text-base">text-base: Hello World (16px)</h3>
      <h4 className="text-lg">text-lg: Hello World (18px)</h4>
      <h5 className="text-xl">text-xl: Hello World (24px)</h5>
      <h6 className="text-2xl">text-2xl: Hello World (36px)</h6>
      <Button iconLeft={"/wechat.svg"}>Label</Button>
      <Button iconRight={"/triangle-down.svg"}>Label</Button>
    </div>
  );
}
