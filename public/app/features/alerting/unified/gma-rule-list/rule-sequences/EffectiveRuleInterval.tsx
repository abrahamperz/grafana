import { RuleInterval } from '../rule-row/RuleInterval';

import { RuleSequencePill } from './RuleSequencePill';
import { type RuleSequenceMembership } from './ruleSequenceMembership';

interface EffectiveRuleIntervalProps {
  /** `null`: not in a sequence. `undefined`: membership is loading or failed to load. */
  membership: RuleSequenceMembership | null | undefined;
  ruleInterval?: string;
}

/** Shows nothing while membership is unknown, because the rule's own interval may be wrong then. */
export function EffectiveRuleInterval({ membership, ruleInterval }: EffectiveRuleIntervalProps) {
  if (membership === undefined) {
    return null;
  }
  if (membership === null) {
    return ruleInterval ? <RuleInterval interval={ruleInterval} /> : null;
  }
  return <RuleSequencePill interval={membership.interval} />;
}
