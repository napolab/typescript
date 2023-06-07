import { execute } from "@naporin0624/worker";
import { config } from "dotenv";

import { logger } from "@adapters/logger";

import thread from "./sample.worker";

config();

export const main = async () => {
  logger.debug("Hello, world!");
  logger.info("Hello, world!");
  logger.success("Hello, world!");
  logger.warning("Hello, world!");
  logger.error("Hello, world!");
  const worker = execute(thread)("Hello, world!");

  worker.on("message", (message) => {
    logger.debug(JSON.stringify(message));
  });
};

void main();
