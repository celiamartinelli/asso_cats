export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      adoption: {
        Row: {
          adoption_id: string;
          cat_id: string | null;
          created_at: string;
          date_of_adoption: string | null;
          testimony: string | null;
        };
        Insert: {
          adoption_id?: string;
          cat_id?: string | null;
          created_at?: string;
          date_of_adoption?: string | null;
          testimony?: string | null;
        };
        Update: {
          adoption_id?: string;
          cat_id?: string | null;
          created_at?: string;
          date_of_adoption?: string | null;
          testimony?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "adoption_cat_id_fkey";
            columns: ["cat_id"];
            isOneToOne: false;
            referencedRelation: "cat";
            referencedColumns: ["cats_id"];
          },
        ];
      };
      adoption_form: {
        Row: {
          address: string;
          adoption_form_id: string;
          allergies_description: string;
          cats_id: string | null;
          city_name: string;
          created_at: string;
          date_of_birth: string;
          first_name: string;
          have_animals: boolean;
          have_you_garden: Database["public"]["Enums"]["have_you_garden"][];
          house_description: string;
          last_name: string;
          living_area: string;
          mail: string;
          occupation: string;
          phone_number: string;
          postal_code: string;
          sterelization_opinion: string;
          type_of_housing: Database["public"]["Enums"]["type_housing"][];
          wich_ones: string;
          why_adopt: string;
        };
        Insert: {
          address: string;
          adoption_form_id?: string;
          allergies_description: string;
          cats_id?: string | null;
          city_name: string;
          created_at?: string;
          date_of_birth: string;
          first_name: string;
          have_animals?: boolean;
          have_you_garden: Database["public"]["Enums"]["have_you_garden"][];
          house_description: string;
          last_name: string;
          living_area: string;
          mail: string;
          occupation: string;
          phone_number: string;
          postal_code: string;
          sterelization_opinion: string;
          type_of_housing: Database["public"]["Enums"]["type_housing"][];
          which_ones: string;
          why_adopt: string;
        };
        Update: {
          address?: string;
          adoption_form_id?: string;
          allergies_description?: string;
          cats_id?: string | null;
          city_name?: string;
          created_at?: string;
          date_of_birth?: string;
          first_name?: string;
          have_animals?: boolean;
          have_you_garden?: Database["public"]["Enums"]["have_you_garden"][];
          house_description?: string;
          last_name?: string;
          living_area?: string;
          mail?: string;
          occupation?: string;
          phone_number?: string;
          postal_code?: string;
          sterelization_opinion?: string;
          type_of_housing?: Database["public"]["Enums"]["type_housing"][];
          which_ones?: string;
          why_adopt?: string;
        };
        Relationships: [
          {
            foreignKeyName: "adoption_form_cats_id_fkey";
            columns: ["cats_id"];
            isOneToOne: false;
            referencedRelation: "cat";
            referencedColumns: ["cats_id"];
          },
        ];
      };
      advice: {
        Row: {
          advice_id: string;
          age_of_cat: Database["public"]["Enums"]["age_of_cat"] | null;
          body_of_advice: string | null;
          category_cat: Database["public"]["Enums"]["category_cat"] | null;
          created_at: string;
          like: string | null;
          subject: Database["public"]["Enums"]["subject_advice"] | null;
          title: string | null;
          useful: boolean | null;
        };
        Insert: {
          advice_id?: string;
          age_of_cat?: Database["public"]["Enums"]["age_of_cat"] | null;
          body_of_advice?: string | null;
          category_cat?: Database["public"]["Enums"]["category_cat"] | null;
          created_at?: string;
          like?: string | null;
          subject?: Database["public"]["Enums"]["subject_advice"] | null;
          title?: string | null;
          useful?: boolean | null;
        };
        Update: {
          advice_id?: string;
          age_of_cat?: Database["public"]["Enums"]["age_of_cat"] | null;
          body_of_advice?: string | null;
          category_cat?: Database["public"]["Enums"]["category_cat"] | null;
          created_at?: string;
          like?: string | null;
          subject?: Database["public"]["Enums"]["subject_advice"] | null;
          title?: string | null;
          useful?: boolean | null;
        };
        Relationships: [
          {
            foreignKeyName: "advice_advice_id_fkey";
            columns: ["advice_id"];
            isOneToOne: true;
            referencedRelation: "cat";
            referencedColumns: ["cats_id"];
          },
        ];
      };
      association: {
        Row: {
          address: string | null;
          association_id: string;
          created_at: string;
          location_city_name: string | null;
          mail: string | null;
          name: string | null;
          name_contact: string | null;
          phone_number: string | null;
        };
        Insert: {
          address?: string | null;
          association_id?: string;
          created_at?: string;
          location_city_name?: string | null;
          mail?: string | null;
          name?: string | null;
          name_contact?: string | null;
          phone_number?: string | null;
        };
        Update: {
          address?: string | null;
          association_id?: string;
          created_at?: string;
          location_city_name?: string | null;
          mail?: string | null;
          name?: string | null;
          name_contact?: string | null;
          phone_number?: string | null;
        };
        Relationships: [];
      };
      calendar: {
        Row: {
          calendar_id: string;
          created_at: string;
          date_end: string | null;
          date_start: string | null;
          lacation_addres: string | null;
          subject: string | null;
          taught_name: string | null;
          title_event: string | null;
        };
        Insert: {
          calendar_id?: string;
          created_at?: string;
          date_end?: string | null;
          date_start?: string | null;
          lacation_addres?: string | null;
          subject?: string | null;
          taught_name?: string | null;
          title_event?: string | null;
        };
        Update: {
          calendar_id?: string;
          created_at?: string;
          date_end?: string | null;
          date_start?: string | null;
          lacation_addres?: string | null;
          subject?: string | null;
          taught_name?: string | null;
          title_event?: string | null;
        };
        Relationships: [];
      };
      cat: {
        Row: {
          adoption: boolean;
          age_of_cat: Database["public"]["Enums"]["age_of_cat"];
          caegory_cat: string | null;
          cats_id: string;
          coat_color: Database["public"]["Enums"]["coat_color"];
          created_at: string;
          date_of_birth: string;
          description: string | null;
          felv_test: boolean;
          fiv_test: boolean;
          name_cat: string;
          pattern: Database["public"]["Enums"]["pattern_cat"][];
          sex_cat: Database["public"]["Enums"]["sex_cat"][];
          sterelized: boolean;
          vaccine: boolean;
        };
        Insert: {
          adoption?: boolean;
          age_of_cat: Database["public"]["Enums"]["age_of_cat"];
          caegory_cat?: string | null;
          cats_id?: string;
          coat_color: Database["public"]["Enums"]["coat_color"];
          created_at?: string;
          date_of_birth: string;
          description?: string | null;
          felv_test?: boolean;
          fiv_test?: boolean;
          name_cat: string;
          pattern: Database["public"]["Enums"]["pattern_cat"][];
          sex_cat: Database["public"]["Enums"]["sex_cat"][];
          sterelized?: boolean;
          vaccine?: boolean;
        };
        Update: {
          adoption?: boolean;
          age_of_cat?: Database["public"]["Enums"]["age_of_cat"];
          caegory_cat?: string | null;
          cats_id?: string;
          coat_color?: Database["public"]["Enums"]["coat_color"];
          created_at?: string;
          date_of_birth?: string;
          description?: string | null;
          felv_test?: boolean;
          fiv_test?: boolean;
          name_cat?: string;
          pattern?: Database["public"]["Enums"]["pattern_cat"][];
          sex_cat?: Database["public"]["Enums"]["sex_cat"][];
          sterelized?: boolean;
          vaccine?: boolean;
        };
        Relationships: [];
      };
      contact_form: {
        Row: {
          contact_form_id: string;
          created_at: string;
          first_name: string;
          last_name: string;
          message: string;
          read: boolean | null;
          subject: Database["public"]["Enums"]["subject_contact"][];
        };
        Insert: {
          contact_form_id?: string;
          created_at?: string;
          first_name: string;
          last_name: string;
          message: string;
          read?: boolean | null;
          subject: Database["public"]["Enums"]["subject_contact"][];
        };
        Update: {
          contact_form_id?: string;
          created_at?: string;
          first_name?: string;
          last_name?: string;
          message?: string;
          read?: boolean | null;
          subject?: Database["public"]["Enums"]["subject_contact"][];
        };
        Relationships: [];
      };
      foster_family_form: {
        Row: {
          address: string;
          capacity_number_animals: number;
          created_at: string;
          date_of_birth: string;
          first_name: string;
          foster_family_form_id: string;
          have_you_other_animals: boolean;
          home_description: string;
          last_name: string;
          living_area: string;
          mail: string;
          other_details: string;
          phone_number: string;
          specific_part: boolean;
          transported: boolean;
          type_animals: string;
          type_foster_family: Database["public"]["Enums"]["type_foster_family"][];
          type_of_housing: string;
          why_foster_family: string;
        };
        Insert: {
          address: string;
          capacity_number_animals: number;
          created_at?: string;
          date_of_birth: string;
          first_name: string;
          foster_family_form_id?: string;
          have_you_other_animals: boolean;
          home_description: string;
          last_name: string;
          living_area: string;
          mail: string;
          other_details: string;
          phone_number: string;
          specific_part: boolean;
          transported: boolean;
          type_animals: string;
          type_foster_family: Database["public"]["Enums"]["type_foster_family"][];
          type_of_housing: string;
          why_foster_family: string;
        };
        Update: {
          address?: string;
          capacity_number_animals?: number;
          created_at?: string;
          date_of_birth?: string;
          first_name?: string;
          foster_family_form_id?: string;
          have_you_other_animals?: boolean;
          home_description?: string;
          last_name?: string;
          living_area?: string;
          mail?: string;
          other_details?: string;
          phone_number?: string;
          specific_part?: boolean;
          transported?: boolean;
          type_animals?: string;
          type_foster_family?: Database["public"]["Enums"]["type_foster_family"][];
          type_of_housing?: string;
          why_foster_family?: string;
        };
        Relationships: [];
      };
      municipality: {
        Row: {
          address: string | null;
          city_name: string | null;
          created_at: string;
          municipality_id: string;
          phone_number: string | null;
          postal_code: string | null;
          town_hall_protocol: boolean | null;
        };
        Insert: {
          address?: string | null;
          city_name?: string | null;
          created_at?: string;
          municipality_id?: string;
          phone_number?: string | null;
          postal_code?: string | null;
          town_hall_protocol?: boolean | null;
        };
        Update: {
          address?: string | null;
          city_name?: string | null;
          created_at?: string;
          municipality_id?: string;
          phone_number?: string | null;
          postal_code?: string | null;
          town_hall_protocol?: boolean | null;
        };
        Relationships: [
          {
            foreignKeyName: "municipality_municipality_id_fkey";
            columns: ["municipality_id"];
            isOneToOne: true;
            referencedRelation: "association";
            referencedColumns: ["association_id"];
          },
        ];
      };
      volunteer_form: {
        Row: {
          created_at: string;
          first_name: string;
          form_id: string;
          last_name: string;
          mail: string;
          motivation: string;
          type_volunteer: string;
          why_volunteer: string;
        };
        Insert: {
          created_at?: string;
          first_name: string;
          form_id?: string;
          last_name: string;
          mail: string;
          motivation: string;
          type_volunteer: string;
          why_volunteer: string;
        };
        Update: {
          created_at?: string;
          first_name?: string;
          form_id?: string;
          last_name?: string;
          mail?: string;
          motivation?: string;
          type_volunteer?: string;
          why_volunteer?: string;
        };
        Relationships: [];
      };
      volunteer_form_types: {
        Row: {
          created_at: string;
          volunteer_form_id: string;
          volunteer_type_id: string | null;
        };
        Insert: {
          created_at?: string;
          volunteer_form_id?: string;
          volunteer_type_id?: string | null;
        };
        Update: {
          created_at?: string;
          volunteer_form_id?: string;
          volunteer_type_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "volunteer_form_types_volunteer_form_id_fkey";
            columns: ["volunteer_form_id"];
            isOneToOne: true;
            referencedRelation: "volunteer_form";
            referencedColumns: ["form_id"];
          },
          {
            foreignKeyName: "volunteer_form_types_volunteer_type_id_fkey";
            columns: ["volunteer_type_id"];
            isOneToOne: false;
            referencedRelation: "volunteer_types";
            referencedColumns: ["types_id"];
          },
        ];
      };
      volunteer_types: {
        Row: {
          created_at: string;
          description: string;
          title: string;
          types_id: string;
        };
        Insert: {
          created_at?: string;
          description: string;
          title: string;
          types_id?: string;
        };
        Update: {
          created_at?: string;
          description?: string;
          title?: string;
          types_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      age_of_cat: "Kittens" | "Young cat" | "Adult" | "Senior";
      category_cat:
        | "Health and Safety"
        | "Wellness and Behavior"
        | "Activities and Enrichment"
        | "Education and Awareness"
        | "Practical guide";
      coat_color:
        | "White"
        | "Blue/Grey"
        | "Cinnamon"
        | "Chocolate"
        | "Cream"
        | "Fawn"
        | "Black"
        | "Red";
      have_you_garden:
        | "A secure garden"
        | "A non-fenced garden"
        | "A secure balcony"
        | "A balcony"
        | "None";
      pattern_cat:
        | "Solid"
        | "Bi-color"
        | "Tabby"
        | "Tortoiseshell"
        | "Tri-color / Calico"
        | "Colourpoint";
      sex_cat: "Female" | "Male";
      subject_advice:
        | "Abuse"
        | "Adoption"
        | "Stray cats"
        | "Donation collection"
        | "Information";
      subject_contact:
        | "Emergencies and Reporting"
        | "Events and Campaigns"
        | "Education and Awareness"
        | "General Information about the Association"
        | "Donations"
        | "Temporary Foster Care"
        | "Volunteering"
        | "Sponsorship"
        | "Adoption"
        | "Other";
      type_foster_family:
        | "Long Term Foster Family"
        | "Quarantine Foster Family"
        | "Transit Foster Family";
      type_housing: "house" | "apartment" | "castle" | "caravan";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

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
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

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
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
