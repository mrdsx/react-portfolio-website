import SupabaseIcon from "@/components/icons/supabase";
import Skill from "@/components/skill";

const SupabaseSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <SupabaseIcon />
    Supabase
  </Skill>
);

export default SupabaseSkill;
