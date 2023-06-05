// TODO: this is a workaround for for type issue with framer-motion@6
// Upgrade react-script to v5
declare module "framer-motion/dist/framer-motion" {
  export * from "framer-motion";
}
