export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      adoption: {
        Row: {
          adoption_id: string
          created_at: string
          date_of_adoption: string | null
          testimony: string | null
        }
        Insert: {
          adoption_id?: string
          created_at?: string
          date_of_adoption?: string | null
          testimony?: string | null
        }
        Update: {
          adoption_id?: string
          created_at?: string
          date_of_adoption?: string | null
          testimony?: string | null
        }
        Relationships: []
      }
      advice: {
        Row: {
          advice_id: string
          body_of_advice: string | null
          category_cats: string | null
          created_at: string
          like: string | null
          subject: string | null
          title: string | null
          useful: boolean | null
        }
        Insert: {
          advice_id?: string
          body_of_advice?: string | null
          category_cats?: string | null
          created_at?: string
          like?: string | null
          subject?: string | null
          title?: string | null
          useful?: boolean | null
        }
        Update: {
          advice_id?: string
          body_of_advice?: string | null
          category_cats?: string | null
          created_at?: string
          like?: string | null
          subject?: string | null
          title?: string | null
          useful?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "advice_advice_id_fkey"
            columns: ["advice_id"]
            isOneToOne: true
            referencedRelation: "cat"
            referencedColumns: ["cats_id"]
          },
        ]
      }
      association: {
        Row: {
          address: string | null
          association_id: string
          created_at: string
          location_city_name: string | null
          mail: string | null
          name: string | null
          name_contact: string | null
          phone_number: string | null
        }
        Insert: {
          address?: string | null
          association_id?: string
          created_at?: string
          location_city_name?: string | null
          mail?: string | null
          name?: string | null
          name_contact?: string | null
          phone_number?: string | null
        }
        Update: {
          address?: string | null
          association_id?: string
          created_at?: string
          location_city_name?: string | null
          mail?: string | null
          name?: string | null
          name_contact?: string | null
          phone_number?: string | null
        }
        Relationships: []
      }
      calendar: {
        Row: {
          calendar_id: string
          created_at: string
          date_end: string | null
          date_start: string | null
          lacation_addres: string | null
          subject: string | null
          taught_name: string | null
          title_event: string | null
        }
        Insert: {
          calendar_id?: string
          created_at?: string
          date_end?: string | null
          date_start?: string | null
          lacation_addres?: string | null
          subject?: string | null
          taught_name?: string | null
          title_event?: string | null
        }
        Update: {
          calendar_id?: string
          created_at?: string
          date_end?: string | null
          date_start?: string | null
          lacation_addres?: string | null
          subject?: string | null
          taught_name?: string | null
          title_event?: string | null
        }
        Relationships: []
      }
      cat: {
        Row: {
          adoption: boolean | null
          cats_id: string
          coat_color: string | null
          created_at: string
          date_of_birth: string | null
          description: string | null
          felv_test: boolean | null
          fiv_test: boolean | null
          name_cat: string | null
          pattern: string | null
          sex_cat: string | null
          sterelized: boolean | null
          vaccine: boolean | null
        }
        Insert: {
          adoption?: boolean | null
          cats_id?: string
          coat_color?: string | null
          created_at?: string
          date_of_birth?: string | null
          description?: string | null
          felv_test?: boolean | null
          fiv_test?: boolean | null
          name_cat?: string | null
          pattern?: string | null
          sex_cat?: string | null
          sterelized?: boolean | null
          vaccine?: boolean | null
        }
        Update: {
          adoption?: boolean | null
          cats_id?: string
          coat_color?: string | null
          created_at?: string
          date_of_birth?: string | null
          description?: string | null
          felv_test?: boolean | null
          fiv_test?: boolean | null
          name_cat?: string | null
          pattern?: string | null
          sex_cat?: string | null
          sterelized?: boolean | null
          vaccine?: boolean | null
        }
        Relationships: []
      }
      form: {
        Row: {
          created_at: string
          form_id: string
          name_user: string | null
          read: boolean | null
          subject: string | null
        }
        Insert: {
          created_at?: string
          form_id?: string
          name_user?: string | null
          read?: boolean | null
          subject?: string | null
        }
        Update: {
          created_at?: string
          form_id?: string
          name_user?: string | null
          read?: boolean | null
          subject?: string | null
        }
        Relationships: []
      }
      municipality: {
        Row: {
          address: string | null
          city_name: string | null
          created_at: string
          municipality_id: string
          phone_number: string | null
          postal_code: string | null
          town_hall_protocol: boolean | null
        }
        Insert: {
          address?: string | null
          city_name?: string | null
          created_at?: string
          municipality_id?: string
          phone_number?: string | null
          postal_code?: string | null
          town_hall_protocol?: boolean | null
        }
        Update: {
          address?: string | null
          city_name?: string | null
          created_at?: string
          municipality_id?: string
          phone_number?: string | null
          postal_code?: string | null
          town_hall_protocol?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "municipality_municipality_id_fkey"
            columns: ["municipality_id"]
            isOneToOne: true
            referencedRelation: "association"
            referencedColumns: ["association_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
