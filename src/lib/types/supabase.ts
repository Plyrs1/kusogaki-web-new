export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      'anilist-data': {
        Row: {
          anilist_id: number;
          created_at: string;
          favourites: number | null;
          id: string;
          name: string;
          popularity: number | null;
          score: number | null;
          type: string;
        };
        Insert: {
          anilist_id: number;
          created_at?: string;
          favourites?: number | null;
          id?: string;
          name: string;
          popularity?: number | null;
          score?: number | null;
          type: string;
        };
        Update: {
          anilist_id?: number;
          created_at?: string;
          favourites?: number | null;
          id?: string;
          name?: string;
          popularity?: number | null;
          score?: number | null;
          type?: string;
        };
        Relationships: [];
      };
      'anilist-user-token': {
        Row: {
          access_token: string;
          created_at: string;
          expired_at: string;
          id: number;
          refresh_token: string;
          user_id: string;
        };
        Insert: {
          access_token: string;
          created_at?: string;
          expired_at: string;
          id?: number;
          refresh_token: string;
          user_id: string;
        };
        Update: {
          access_token?: string;
          created_at?: string;
          expired_at?: string;
          id?: number;
          refresh_token?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'anilist-user-token_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      badges: {
        Row: {
          author: string | null;
          created_at: string;
          event: string | null;
          id: string;
          img: string | null;
          is_accepted: boolean | null;
          modified_at: string | null;
          type: string | null;
          uploader: string;
        };
        Insert: {
          author?: string | null;
          created_at?: string;
          event?: string | null;
          id?: string;
          img?: string | null;
          is_accepted?: boolean | null;
          modified_at?: string | null;
          type?: string | null;
          uploader: string;
        };
        Update: {
          author?: string | null;
          created_at?: string;
          event?: string | null;
          id?: string;
          img?: string | null;
          is_accepted?: boolean | null;
          modified_at?: string | null;
          type?: string | null;
          uploader?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'badges_author_fkey';
            columns: ['author'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'badges_event_fkey';
            columns: ['event'];
            isOneToOne: false;
            referencedRelation: 'events';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'badges_uploader_fkey';
            columns: ['uploader'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      events: {
        Row: {
          anilist_url: string | null;
          author: string;
          created_at: string;
          description: string | null;
          id: string;
          img: string | null;
          is_announced: boolean;
          is_published: boolean;
          likes: number;
          start_at: string;
          title: string;
          updated_at: string | null;
        };
        Insert: {
          anilist_url?: string | null;
          author?: string;
          created_at?: string;
          description?: string | null;
          id?: string;
          img?: string | null;
          is_announced?: boolean;
          is_published?: boolean;
          likes?: number;
          start_at?: string;
          title: string;
          updated_at?: string | null;
        };
        Update: {
          anilist_url?: string | null;
          author?: string;
          created_at?: string;
          description?: string | null;
          id?: string;
          img?: string | null;
          is_announced?: boolean;
          is_published?: boolean;
          likes?: number;
          start_at?: string;
          title?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'events_author_fkey2';
            columns: ['author'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      profiles: {
        Row: {
          anilist_id: number | null;
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          role: Database['public']['Enums']['user_role'][] | null;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          anilist_id?: number | null;
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          role?: Database['public']['Enums']['user_role'][] | null;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          anilist_id?: number | null;
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          role?: Database['public']['Enums']['user_role'][] | null;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      user_badge: {
        Row: {
          badge: string;
          created_at: string;
          id: string;
          user: string;
        };
        Insert: {
          badge: string;
          created_at?: string;
          id?: string;
          user: string;
        };
        Update: {
          badge?: string;
          created_at?: string;
          id?: string;
          user?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_badge_badge_fkey';
            columns: ['badge'];
            isOneToOne: false;
            referencedRelation: 'badges';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_badge_user_fkey';
            columns: ['user'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_user_by_username: {
        Args: {
          username: string;
        };
        Returns: {
          id: string;
        }[];
      };
    };
    Enums: {
      user_role: 'Admin' | 'Developer' | 'Design' | 'Planning' | 'New Recruit' | 'Retired';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] & Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] & Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
