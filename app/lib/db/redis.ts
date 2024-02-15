import { Redis } from "ioredis";

declare global {
  interface Global {
    redisClient?: Redis;
  }
}

const globalForRedis = global as Global;

export const rdb =
  (globalForRedis.redisClient as Redis) ?? new Redis(process.env.REDIS_URI!);

if (process.env.NODE_ENV !== "production") {
  globalForRedis.redisClient = rdb as Redis;
}
