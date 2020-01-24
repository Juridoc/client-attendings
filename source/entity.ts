/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

/**
 * Attending entity class.
 */
@RestDB.Schema.Entity('invitations/{id}/attendee')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * First name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public firstName!: string;

  /**
   * Last name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public lastName?: string;

  /**
   * Invitation email.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;
}
