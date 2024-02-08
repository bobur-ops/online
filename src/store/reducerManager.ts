import { Reducer, combineReducers } from "@reduxjs/toolkit"

export class ReducerManager<T extends Record<string, Reducer>> {
  private reducers: T & Record<string, Reducer>
  private keysToRemove: string[]
  private combinedReducer: ReturnType<typeof combineReducers<T & Record<string, Reducer>>>

  constructor(initialReducers: T) {
    type a = Parameters<T[string]>[0];
    this.reducers = initialReducers;
    this.keysToRemove = [];
    this.combinedReducer = combineReducers(this.reducers);
  }

  getReducerMap() {
    return this.reducers
  }

  reduce(state: Parameters<typeof this.combinedReducer>[0], action: Parameters<typeof this.combinedReducer>[1]) {
    // If any reducers have been removed, clean up their state first
    if (this.keysToRemove.length > 0) {
      state = { ...state }
      for (let key of this.keysToRemove) {
        delete state![key]
      }
      this.keysToRemove = []
    }

    // Delegate to the combined reducer
    return this.combinedReducer(state, action)
  }

  // Adds a new reducer with the specified key
  add(key: string, reducer: Reducer) {
    if (!key || this.reducers[key]) {
      return
    }

    // Add the reducer to the reducer mapping
    (this.reducers as any)[key] = reducer

    // Generate a new combined reducer
    this.combinedReducer = combineReducers(this.reducers)
  }

  // Removes a reducer with the specified key
  remove(key: string) {
    if (!key || !this.reducers[key]) {
      return
    }

    // Remove it from the reducer mapping
    delete this.reducers[key]

    // Add the key to the list of keys to clean up
    this.keysToRemove.push(key)

    // Generate a new combined reducer
    this.combinedReducer = combineReducers(this.reducers)
  }

}
