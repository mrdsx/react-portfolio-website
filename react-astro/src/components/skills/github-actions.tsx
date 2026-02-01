import GithubActionsIcon from "@/components/icons/github-actions";
import Skill from "@/components/skill";

const GithubActionsSkill = ({
  ...props
}: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <GithubActionsIcon />
    Actions
  </Skill>
);

export default GithubActionsSkill;
