import { Image, ImageProps } from "@chakra-ui/react";

interface LogoProps extends ImageProps { }

export function Logo({ ...rest }: ImageProps) {
  return (
    <Image src="/assets/images/logo-feedify.svg" {...rest} />
  )
}