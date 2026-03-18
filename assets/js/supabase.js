// supabase.js - Supabase client initialization and database functions

import { createClient } from '@supabase/supabase-js';

// Supabase URL and Anon Key should be stored in environment variables,
// but for the sake of simplicity, we are declaring them here directly.
const SUPABASE_URL = 'your_supabase_url';
const SUPABASE_ANON_KEY = 'your_supabase_anon_key';

// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to get data from a table
export const getData = async (table) => {
    const { data, error } = await supabase
        .from(table)
        .select('*');
    return { data, error };
};

// Function to insert data into a table
export const insertData = async (table, values) => {
    const { data, error } = await supabase
        .from(table)
        .insert(values);
    return { data, error };
};

// Function to delete data from a table
export const deleteData = async (table, id) => {
    const { data, error } = await supabase
        .from(table)
        .delete()
        .eq('id', id);
    return { data, error };
};

// Function to update data in a table
export const updateData = async (table, id, values) => {
    const { data, error } = await supabase
        .from(table)
        .update(values)
        .eq('id', id);
    return { data, error };
};