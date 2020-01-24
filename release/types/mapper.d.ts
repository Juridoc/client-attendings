/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Attendings mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Gets the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the attendee that corresponds to the specified invitation Id.
     * @param id Invitation Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the attendee entity.
     * @throws Throws an error when the attendee wasn't loaded.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
}
