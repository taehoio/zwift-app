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
      zwift_events: {
        Row: {
          duration_in_seconds: number | null
          event_start: string
          laps: number | null
          map_id: number | null
          name: string
          route_id: number | null
          rules_id: number | null
          subgroup_ids: number[] | null
          updated_at: string
          world_id: number | null
          zwift_event: Json | null
          zwift_event_id: number
        }
        Insert: {
          duration_in_seconds?: number | null
          event_start: string
          laps?: number | null
          map_id?: number | null
          name: string
          route_id?: number | null
          rules_id?: number | null
          subgroup_ids?: number[] | null
          updated_at?: string
          world_id?: number | null
          zwift_event?: Json | null
          zwift_event_id: number
        }
        Update: {
          duration_in_seconds?: number | null
          event_start?: string
          laps?: number | null
          map_id?: number | null
          name?: string
          route_id?: number | null
          rules_id?: number | null
          subgroup_ids?: number[] | null
          updated_at?: string
          world_id?: number | null
          zwift_event?: Json | null
          zwift_event_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "zwift_events_route_id_zwift_routes_zwift_route_id_fk"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "zwift_routes"
            referencedColumns: ["zwift_route_id"]
          },
        ]
      }
      zwift_routes: {
        Row: {
          distance_km: number
          elevation_m: number
          lead_in_km: number
          name: string
          profile: string | null
          updated_at: string
          world: string | null
          zwift_route_id: number
          zwiftinsider_url: string | null
          zwiftracing_route: Json | null
        }
        Insert: {
          distance_km: number
          elevation_m: number
          lead_in_km: number
          name: string
          profile?: string | null
          updated_at?: string
          world?: string | null
          zwift_route_id: number
          zwiftinsider_url?: string | null
          zwiftracing_route?: Json | null
        }
        Update: {
          distance_km?: number
          elevation_m?: number
          lead_in_km?: number
          name?: string
          profile?: string | null
          updated_at?: string
          world?: string | null
          zwift_route_id?: number
          zwiftinsider_url?: string | null
          zwiftracing_route?: Json | null
        }
        Relationships: []
      }
      zwift_users: {
        Row: {
          age: number | null
          category: string | null
          category_women: string | null
          competition_metrics: Json | null
          competition_metrics_updated_at: string | null
          country_alpha3: string | null
          first_name: string | null
          ftp: number | null
          height_cm: number | null
          image_src: string | null
          last_name: string | null
          male: boolean | null
          name: string | null
          racing_score: number | null
          rank: number | null
          updated_at: string
          watts_in_1200s: number | null
          watts_in_15s: number | null
          watts_in_300s: number | null
          watts_in_60s: number | null
          weight_kg: number | null
          wkg_in_1200s: number | null
          wkg_in_15s: number | null
          wkg_in_300s: number | null
          wkg_in_60s: number | null
          zftp: number | null
          zwift_id: number
          zwift_updated_at: string | null
          zwift_user: Json | null
          zwift_user_status: string | null
          zwiftpower_api_user: Json | null
          zwiftpower_api_user_updated_at: string | null
          zwiftpower_page_user: Json | null
          zwiftpower_page_user_updated_at: string | null
        }
        Insert: {
          age?: number | null
          category?: string | null
          category_women?: string | null
          competition_metrics?: Json | null
          competition_metrics_updated_at?: string | null
          country_alpha3?: string | null
          first_name?: string | null
          ftp?: number | null
          height_cm?: number | null
          image_src?: string | null
          last_name?: string | null
          male?: boolean | null
          name?: string | null
          racing_score?: number | null
          rank?: number | null
          updated_at?: string
          watts_in_1200s?: number | null
          watts_in_15s?: number | null
          watts_in_300s?: number | null
          watts_in_60s?: number | null
          weight_kg?: number | null
          wkg_in_1200s?: number | null
          wkg_in_15s?: number | null
          wkg_in_300s?: number | null
          wkg_in_60s?: number | null
          zftp?: number | null
          zwift_id: number
          zwift_updated_at?: string | null
          zwift_user?: Json | null
          zwift_user_status?: string | null
          zwiftpower_api_user?: Json | null
          zwiftpower_api_user_updated_at?: string | null
          zwiftpower_page_user?: Json | null
          zwiftpower_page_user_updated_at?: string | null
        }
        Update: {
          age?: number | null
          category?: string | null
          category_women?: string | null
          competition_metrics?: Json | null
          competition_metrics_updated_at?: string | null
          country_alpha3?: string | null
          first_name?: string | null
          ftp?: number | null
          height_cm?: number | null
          image_src?: string | null
          last_name?: string | null
          male?: boolean | null
          name?: string | null
          racing_score?: number | null
          rank?: number | null
          updated_at?: string
          watts_in_1200s?: number | null
          watts_in_15s?: number | null
          watts_in_300s?: number | null
          watts_in_60s?: number | null
          weight_kg?: number | null
          wkg_in_1200s?: number | null
          wkg_in_15s?: number | null
          wkg_in_300s?: number | null
          wkg_in_60s?: number | null
          zftp?: number | null
          zwift_id?: number
          zwift_updated_at?: string | null
          zwift_user?: Json | null
          zwift_user_status?: string | null
          zwiftpower_api_user?: Json | null
          zwiftpower_api_user_updated_at?: string | null
          zwiftpower_page_user?: Json | null
          zwiftpower_page_user_updated_at?: string | null
        }
        Relationships: []
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
