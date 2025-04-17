
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SessionFrontEnd
 * 
 */
export type SessionFrontEnd = $Result.DefaultSelection<Prisma.$SessionFrontEndPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SessionFrontEnds
 * const sessionFrontEnds = await prisma.sessionFrontEnd.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SessionFrontEnds
   * const sessionFrontEnds = await prisma.sessionFrontEnd.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sessionFrontEnd`: Exposes CRUD operations for the **SessionFrontEnd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionFrontEnds
    * const sessionFrontEnds = await prisma.sessionFrontEnd.findMany()
    * ```
    */
  get sessionFrontEnd(): Prisma.SessionFrontEndDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SessionFrontEnd: 'SessionFrontEnd'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sessionFrontEnd"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SessionFrontEnd: {
        payload: Prisma.$SessionFrontEndPayload<ExtArgs>
        fields: Prisma.SessionFrontEndFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFrontEndFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFrontEndFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>
          }
          findFirst: {
            args: Prisma.SessionFrontEndFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFrontEndFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>
          }
          findMany: {
            args: Prisma.SessionFrontEndFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>[]
          }
          create: {
            args: Prisma.SessionFrontEndCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>
          }
          createMany: {
            args: Prisma.SessionFrontEndCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionFrontEndCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>[]
          }
          delete: {
            args: Prisma.SessionFrontEndDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>
          }
          update: {
            args: Prisma.SessionFrontEndUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>
          }
          deleteMany: {
            args: Prisma.SessionFrontEndDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionFrontEndUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionFrontEndUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>[]
          }
          upsert: {
            args: Prisma.SessionFrontEndUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionFrontEndPayload>
          }
          aggregate: {
            args: Prisma.SessionFrontEndAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionFrontEnd>
          }
          groupBy: {
            args: Prisma.SessionFrontEndGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionFrontEndGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionFrontEndCountArgs<ExtArgs>
            result: $Utils.Optional<SessionFrontEndCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sessionFrontEnd?: SessionFrontEndOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SessionFrontEnd
   */

  export type AggregateSessionFrontEnd = {
    _count: SessionFrontEndCountAggregateOutputType | null
    _min: SessionFrontEndMinAggregateOutputType | null
    _max: SessionFrontEndMaxAggregateOutputType | null
  }

  export type SessionFrontEndMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    phone: string | null
    name: string | null
  }

  export type SessionFrontEndMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    phone: string | null
    name: string | null
  }

  export type SessionFrontEndCountAggregateOutputType = {
    id: number
    sessionId: number
    status: number
    createdAt: number
    updatedAt: number
    phone: number
    name: number
    _all: number
  }


  export type SessionFrontEndMinAggregateInputType = {
    id?: true
    sessionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
    name?: true
  }

  export type SessionFrontEndMaxAggregateInputType = {
    id?: true
    sessionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
    name?: true
  }

  export type SessionFrontEndCountAggregateInputType = {
    id?: true
    sessionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
    name?: true
    _all?: true
  }

  export type SessionFrontEndAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionFrontEnd to aggregate.
     */
    where?: SessionFrontEndWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionFrontEnds to fetch.
     */
    orderBy?: SessionFrontEndOrderByWithRelationInput | SessionFrontEndOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionFrontEndWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionFrontEnds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionFrontEnds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionFrontEnds
    **/
    _count?: true | SessionFrontEndCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionFrontEndMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionFrontEndMaxAggregateInputType
  }

  export type GetSessionFrontEndAggregateType<T extends SessionFrontEndAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionFrontEnd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionFrontEnd[P]>
      : GetScalarType<T[P], AggregateSessionFrontEnd[P]>
  }




  export type SessionFrontEndGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionFrontEndWhereInput
    orderBy?: SessionFrontEndOrderByWithAggregationInput | SessionFrontEndOrderByWithAggregationInput[]
    by: SessionFrontEndScalarFieldEnum[] | SessionFrontEndScalarFieldEnum
    having?: SessionFrontEndScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionFrontEndCountAggregateInputType | true
    _min?: SessionFrontEndMinAggregateInputType
    _max?: SessionFrontEndMaxAggregateInputType
  }

  export type SessionFrontEndGroupByOutputType = {
    id: string
    sessionId: string
    status: string
    createdAt: Date
    updatedAt: Date
    phone: string | null
    name: string | null
    _count: SessionFrontEndCountAggregateOutputType | null
    _min: SessionFrontEndMinAggregateOutputType | null
    _max: SessionFrontEndMaxAggregateOutputType | null
  }

  type GetSessionFrontEndGroupByPayload<T extends SessionFrontEndGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionFrontEndGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionFrontEndGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionFrontEndGroupByOutputType[P]>
            : GetScalarType<T[P], SessionFrontEndGroupByOutputType[P]>
        }
      >
    >


  export type SessionFrontEndSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    name?: boolean
  }, ExtArgs["result"]["sessionFrontEnd"]>

  export type SessionFrontEndSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    name?: boolean
  }, ExtArgs["result"]["sessionFrontEnd"]>

  export type SessionFrontEndSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    name?: boolean
  }, ExtArgs["result"]["sessionFrontEnd"]>

  export type SessionFrontEndSelectScalar = {
    id?: boolean
    sessionId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    name?: boolean
  }

  export type SessionFrontEndOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "status" | "createdAt" | "updatedAt" | "phone" | "name", ExtArgs["result"]["sessionFrontEnd"]>

  export type $SessionFrontEndPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionFrontEnd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      status: string
      createdAt: Date
      updatedAt: Date
      phone: string | null
      name: string | null
    }, ExtArgs["result"]["sessionFrontEnd"]>
    composites: {}
  }

  type SessionFrontEndGetPayload<S extends boolean | null | undefined | SessionFrontEndDefaultArgs> = $Result.GetResult<Prisma.$SessionFrontEndPayload, S>

  type SessionFrontEndCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFrontEndFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionFrontEndCountAggregateInputType | true
    }

  export interface SessionFrontEndDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionFrontEnd'], meta: { name: 'SessionFrontEnd' } }
    /**
     * Find zero or one SessionFrontEnd that matches the filter.
     * @param {SessionFrontEndFindUniqueArgs} args - Arguments to find a SessionFrontEnd
     * @example
     * // Get one SessionFrontEnd
     * const sessionFrontEnd = await prisma.sessionFrontEnd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFrontEndFindUniqueArgs>(args: SelectSubset<T, SessionFrontEndFindUniqueArgs<ExtArgs>>): Prisma__SessionFrontEndClient<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionFrontEnd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFrontEndFindUniqueOrThrowArgs} args - Arguments to find a SessionFrontEnd
     * @example
     * // Get one SessionFrontEnd
     * const sessionFrontEnd = await prisma.sessionFrontEnd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFrontEndFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFrontEndFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionFrontEndClient<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionFrontEnd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFrontEndFindFirstArgs} args - Arguments to find a SessionFrontEnd
     * @example
     * // Get one SessionFrontEnd
     * const sessionFrontEnd = await prisma.sessionFrontEnd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFrontEndFindFirstArgs>(args?: SelectSubset<T, SessionFrontEndFindFirstArgs<ExtArgs>>): Prisma__SessionFrontEndClient<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionFrontEnd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFrontEndFindFirstOrThrowArgs} args - Arguments to find a SessionFrontEnd
     * @example
     * // Get one SessionFrontEnd
     * const sessionFrontEnd = await prisma.sessionFrontEnd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFrontEndFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFrontEndFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionFrontEndClient<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionFrontEnds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFrontEndFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionFrontEnds
     * const sessionFrontEnds = await prisma.sessionFrontEnd.findMany()
     * 
     * // Get first 10 SessionFrontEnds
     * const sessionFrontEnds = await prisma.sessionFrontEnd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionFrontEndWithIdOnly = await prisma.sessionFrontEnd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFrontEndFindManyArgs>(args?: SelectSubset<T, SessionFrontEndFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionFrontEnd.
     * @param {SessionFrontEndCreateArgs} args - Arguments to create a SessionFrontEnd.
     * @example
     * // Create one SessionFrontEnd
     * const SessionFrontEnd = await prisma.sessionFrontEnd.create({
     *   data: {
     *     // ... data to create a SessionFrontEnd
     *   }
     * })
     * 
     */
    create<T extends SessionFrontEndCreateArgs>(args: SelectSubset<T, SessionFrontEndCreateArgs<ExtArgs>>): Prisma__SessionFrontEndClient<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionFrontEnds.
     * @param {SessionFrontEndCreateManyArgs} args - Arguments to create many SessionFrontEnds.
     * @example
     * // Create many SessionFrontEnds
     * const sessionFrontEnd = await prisma.sessionFrontEnd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionFrontEndCreateManyArgs>(args?: SelectSubset<T, SessionFrontEndCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionFrontEnds and returns the data saved in the database.
     * @param {SessionFrontEndCreateManyAndReturnArgs} args - Arguments to create many SessionFrontEnds.
     * @example
     * // Create many SessionFrontEnds
     * const sessionFrontEnd = await prisma.sessionFrontEnd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionFrontEnds and only return the `id`
     * const sessionFrontEndWithIdOnly = await prisma.sessionFrontEnd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionFrontEndCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionFrontEndCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionFrontEnd.
     * @param {SessionFrontEndDeleteArgs} args - Arguments to delete one SessionFrontEnd.
     * @example
     * // Delete one SessionFrontEnd
     * const SessionFrontEnd = await prisma.sessionFrontEnd.delete({
     *   where: {
     *     // ... filter to delete one SessionFrontEnd
     *   }
     * })
     * 
     */
    delete<T extends SessionFrontEndDeleteArgs>(args: SelectSubset<T, SessionFrontEndDeleteArgs<ExtArgs>>): Prisma__SessionFrontEndClient<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionFrontEnd.
     * @param {SessionFrontEndUpdateArgs} args - Arguments to update one SessionFrontEnd.
     * @example
     * // Update one SessionFrontEnd
     * const sessionFrontEnd = await prisma.sessionFrontEnd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionFrontEndUpdateArgs>(args: SelectSubset<T, SessionFrontEndUpdateArgs<ExtArgs>>): Prisma__SessionFrontEndClient<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionFrontEnds.
     * @param {SessionFrontEndDeleteManyArgs} args - Arguments to filter SessionFrontEnds to delete.
     * @example
     * // Delete a few SessionFrontEnds
     * const { count } = await prisma.sessionFrontEnd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionFrontEndDeleteManyArgs>(args?: SelectSubset<T, SessionFrontEndDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionFrontEnds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFrontEndUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionFrontEnds
     * const sessionFrontEnd = await prisma.sessionFrontEnd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionFrontEndUpdateManyArgs>(args: SelectSubset<T, SessionFrontEndUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionFrontEnds and returns the data updated in the database.
     * @param {SessionFrontEndUpdateManyAndReturnArgs} args - Arguments to update many SessionFrontEnds.
     * @example
     * // Update many SessionFrontEnds
     * const sessionFrontEnd = await prisma.sessionFrontEnd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionFrontEnds and only return the `id`
     * const sessionFrontEndWithIdOnly = await prisma.sessionFrontEnd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionFrontEndUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionFrontEndUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionFrontEnd.
     * @param {SessionFrontEndUpsertArgs} args - Arguments to update or create a SessionFrontEnd.
     * @example
     * // Update or create a SessionFrontEnd
     * const sessionFrontEnd = await prisma.sessionFrontEnd.upsert({
     *   create: {
     *     // ... data to create a SessionFrontEnd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionFrontEnd we want to update
     *   }
     * })
     */
    upsert<T extends SessionFrontEndUpsertArgs>(args: SelectSubset<T, SessionFrontEndUpsertArgs<ExtArgs>>): Prisma__SessionFrontEndClient<$Result.GetResult<Prisma.$SessionFrontEndPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionFrontEnds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFrontEndCountArgs} args - Arguments to filter SessionFrontEnds to count.
     * @example
     * // Count the number of SessionFrontEnds
     * const count = await prisma.sessionFrontEnd.count({
     *   where: {
     *     // ... the filter for the SessionFrontEnds we want to count
     *   }
     * })
    **/
    count<T extends SessionFrontEndCountArgs>(
      args?: Subset<T, SessionFrontEndCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionFrontEndCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionFrontEnd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFrontEndAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionFrontEndAggregateArgs>(args: Subset<T, SessionFrontEndAggregateArgs>): Prisma.PrismaPromise<GetSessionFrontEndAggregateType<T>>

    /**
     * Group by SessionFrontEnd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFrontEndGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionFrontEndGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionFrontEndGroupByArgs['orderBy'] }
        : { orderBy?: SessionFrontEndGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionFrontEndGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionFrontEndGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionFrontEnd model
   */
  readonly fields: SessionFrontEndFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionFrontEnd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionFrontEndClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionFrontEnd model
   */
  interface SessionFrontEndFieldRefs {
    readonly id: FieldRef<"SessionFrontEnd", 'String'>
    readonly sessionId: FieldRef<"SessionFrontEnd", 'String'>
    readonly status: FieldRef<"SessionFrontEnd", 'String'>
    readonly createdAt: FieldRef<"SessionFrontEnd", 'DateTime'>
    readonly updatedAt: FieldRef<"SessionFrontEnd", 'DateTime'>
    readonly phone: FieldRef<"SessionFrontEnd", 'String'>
    readonly name: FieldRef<"SessionFrontEnd", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionFrontEnd findUnique
   */
  export type SessionFrontEndFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * Filter, which SessionFrontEnd to fetch.
     */
    where: SessionFrontEndWhereUniqueInput
  }

  /**
   * SessionFrontEnd findUniqueOrThrow
   */
  export type SessionFrontEndFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * Filter, which SessionFrontEnd to fetch.
     */
    where: SessionFrontEndWhereUniqueInput
  }

  /**
   * SessionFrontEnd findFirst
   */
  export type SessionFrontEndFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * Filter, which SessionFrontEnd to fetch.
     */
    where?: SessionFrontEndWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionFrontEnds to fetch.
     */
    orderBy?: SessionFrontEndOrderByWithRelationInput | SessionFrontEndOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionFrontEnds.
     */
    cursor?: SessionFrontEndWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionFrontEnds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionFrontEnds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionFrontEnds.
     */
    distinct?: SessionFrontEndScalarFieldEnum | SessionFrontEndScalarFieldEnum[]
  }

  /**
   * SessionFrontEnd findFirstOrThrow
   */
  export type SessionFrontEndFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * Filter, which SessionFrontEnd to fetch.
     */
    where?: SessionFrontEndWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionFrontEnds to fetch.
     */
    orderBy?: SessionFrontEndOrderByWithRelationInput | SessionFrontEndOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionFrontEnds.
     */
    cursor?: SessionFrontEndWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionFrontEnds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionFrontEnds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionFrontEnds.
     */
    distinct?: SessionFrontEndScalarFieldEnum | SessionFrontEndScalarFieldEnum[]
  }

  /**
   * SessionFrontEnd findMany
   */
  export type SessionFrontEndFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * Filter, which SessionFrontEnds to fetch.
     */
    where?: SessionFrontEndWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionFrontEnds to fetch.
     */
    orderBy?: SessionFrontEndOrderByWithRelationInput | SessionFrontEndOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionFrontEnds.
     */
    cursor?: SessionFrontEndWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionFrontEnds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionFrontEnds.
     */
    skip?: number
    distinct?: SessionFrontEndScalarFieldEnum | SessionFrontEndScalarFieldEnum[]
  }

  /**
   * SessionFrontEnd create
   */
  export type SessionFrontEndCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * The data needed to create a SessionFrontEnd.
     */
    data: XOR<SessionFrontEndCreateInput, SessionFrontEndUncheckedCreateInput>
  }

  /**
   * SessionFrontEnd createMany
   */
  export type SessionFrontEndCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionFrontEnds.
     */
    data: SessionFrontEndCreateManyInput | SessionFrontEndCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionFrontEnd createManyAndReturn
   */
  export type SessionFrontEndCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * The data used to create many SessionFrontEnds.
     */
    data: SessionFrontEndCreateManyInput | SessionFrontEndCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionFrontEnd update
   */
  export type SessionFrontEndUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * The data needed to update a SessionFrontEnd.
     */
    data: XOR<SessionFrontEndUpdateInput, SessionFrontEndUncheckedUpdateInput>
    /**
     * Choose, which SessionFrontEnd to update.
     */
    where: SessionFrontEndWhereUniqueInput
  }

  /**
   * SessionFrontEnd updateMany
   */
  export type SessionFrontEndUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionFrontEnds.
     */
    data: XOR<SessionFrontEndUpdateManyMutationInput, SessionFrontEndUncheckedUpdateManyInput>
    /**
     * Filter which SessionFrontEnds to update
     */
    where?: SessionFrontEndWhereInput
    /**
     * Limit how many SessionFrontEnds to update.
     */
    limit?: number
  }

  /**
   * SessionFrontEnd updateManyAndReturn
   */
  export type SessionFrontEndUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * The data used to update SessionFrontEnds.
     */
    data: XOR<SessionFrontEndUpdateManyMutationInput, SessionFrontEndUncheckedUpdateManyInput>
    /**
     * Filter which SessionFrontEnds to update
     */
    where?: SessionFrontEndWhereInput
    /**
     * Limit how many SessionFrontEnds to update.
     */
    limit?: number
  }

  /**
   * SessionFrontEnd upsert
   */
  export type SessionFrontEndUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * The filter to search for the SessionFrontEnd to update in case it exists.
     */
    where: SessionFrontEndWhereUniqueInput
    /**
     * In case the SessionFrontEnd found by the `where` argument doesn't exist, create a new SessionFrontEnd with this data.
     */
    create: XOR<SessionFrontEndCreateInput, SessionFrontEndUncheckedCreateInput>
    /**
     * In case the SessionFrontEnd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionFrontEndUpdateInput, SessionFrontEndUncheckedUpdateInput>
  }

  /**
   * SessionFrontEnd delete
   */
  export type SessionFrontEndDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
    /**
     * Filter which SessionFrontEnd to delete.
     */
    where: SessionFrontEndWhereUniqueInput
  }

  /**
   * SessionFrontEnd deleteMany
   */
  export type SessionFrontEndDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionFrontEnds to delete
     */
    where?: SessionFrontEndWhereInput
    /**
     * Limit how many SessionFrontEnds to delete.
     */
    limit?: number
  }

  /**
   * SessionFrontEnd without action
   */
  export type SessionFrontEndDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionFrontEnd
     */
    select?: SessionFrontEndSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionFrontEnd
     */
    omit?: SessionFrontEndOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionFrontEndScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    phone: 'phone',
    name: 'name'
  };

  export type SessionFrontEndScalarFieldEnum = (typeof SessionFrontEndScalarFieldEnum)[keyof typeof SessionFrontEndScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SessionFrontEndWhereInput = {
    AND?: SessionFrontEndWhereInput | SessionFrontEndWhereInput[]
    OR?: SessionFrontEndWhereInput[]
    NOT?: SessionFrontEndWhereInput | SessionFrontEndWhereInput[]
    id?: StringFilter<"SessionFrontEnd"> | string
    sessionId?: StringFilter<"SessionFrontEnd"> | string
    status?: StringFilter<"SessionFrontEnd"> | string
    createdAt?: DateTimeFilter<"SessionFrontEnd"> | Date | string
    updatedAt?: DateTimeFilter<"SessionFrontEnd"> | Date | string
    phone?: StringNullableFilter<"SessionFrontEnd"> | string | null
    name?: StringNullableFilter<"SessionFrontEnd"> | string | null
  }

  export type SessionFrontEndOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
  }

  export type SessionFrontEndWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: SessionFrontEndWhereInput | SessionFrontEndWhereInput[]
    OR?: SessionFrontEndWhereInput[]
    NOT?: SessionFrontEndWhereInput | SessionFrontEndWhereInput[]
    status?: StringFilter<"SessionFrontEnd"> | string
    createdAt?: DateTimeFilter<"SessionFrontEnd"> | Date | string
    updatedAt?: DateTimeFilter<"SessionFrontEnd"> | Date | string
    phone?: StringNullableFilter<"SessionFrontEnd"> | string | null
    name?: StringNullableFilter<"SessionFrontEnd"> | string | null
  }, "id" | "sessionId">

  export type SessionFrontEndOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: SessionFrontEndCountOrderByAggregateInput
    _max?: SessionFrontEndMaxOrderByAggregateInput
    _min?: SessionFrontEndMinOrderByAggregateInput
  }

  export type SessionFrontEndScalarWhereWithAggregatesInput = {
    AND?: SessionFrontEndScalarWhereWithAggregatesInput | SessionFrontEndScalarWhereWithAggregatesInput[]
    OR?: SessionFrontEndScalarWhereWithAggregatesInput[]
    NOT?: SessionFrontEndScalarWhereWithAggregatesInput | SessionFrontEndScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionFrontEnd"> | string
    sessionId?: StringWithAggregatesFilter<"SessionFrontEnd"> | string
    status?: StringWithAggregatesFilter<"SessionFrontEnd"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SessionFrontEnd"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SessionFrontEnd"> | Date | string
    phone?: StringNullableWithAggregatesFilter<"SessionFrontEnd"> | string | null
    name?: StringNullableWithAggregatesFilter<"SessionFrontEnd"> | string | null
  }

  export type SessionFrontEndCreateInput = {
    id?: string
    sessionId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    name?: string | null
  }

  export type SessionFrontEndUncheckedCreateInput = {
    id?: string
    sessionId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    name?: string | null
  }

  export type SessionFrontEndUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionFrontEndUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionFrontEndCreateManyInput = {
    id?: string
    sessionId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    name?: string | null
  }

  export type SessionFrontEndUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionFrontEndUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionFrontEndCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
    name?: SortOrder
  }

  export type SessionFrontEndMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
    name?: SortOrder
  }

  export type SessionFrontEndMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}