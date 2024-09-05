<template>
  <div class="flex-grow text-center">
    <div id="intro">
      <p class="mt-12 text-xs text-red-600">Hello {{ user.name }}</p>
      <p class="mt-4 text-2xl">Complete Sections to Unlock Features</p>
    </div>

    <div id="'onboardingFlow'" class="mt-12 mx-12 text-left">
      <p>
        Number of Sections to complete: {{ Object.keys(onboardingFlow).length }}
      </p>

      <div
        id="section"
        v-for="(sections, sectionKey) of onboardingFlow"
        class="my-8"
      >
        <fieldset class="border border-dashed rounded-md border-gray-300 p-3">
          <legend class="p-2 text-fuchsia-600">{{ sectionKey }}</legend>
          <div class="grid gap-x-8 gap-y-6 underline underline-offset-8">
            <p>
              Number of Steps to complete in this section: {{ sections.length }}
            </p>
          </div>

          <div v-for="(steps, stepIndex) in sections" class="pl-8 mt-12">
            <fieldset
              class="border border-dashed rounded-md border-gray-300 p-3"
            >
              <legend class="p-2 text-teal-600">Step {{ steps.step }}</legend>

              <div id="step" class="pl-8">
                <div
                  id="questions"
                  class="flex justify-between border-b border-solid mb-8"
                >
                  <pre class="text-pink-600">
Questions to Answer: {{ steps.questions }}    
                  </pre>
                  <button
                    @click="show(sectionKey, steps.step, 'questions')"
                    class="bg-pink-400 hover:bg-gray-300 text-white hover:text-pink-500 hover:border-transparent rounded text-xs px-4 m-4 h-12 w-44"
                  >
                    <div class="flex justify-between">
                      <span> Completed:</span>
                      <CheckIcon class="w-4 ml-4" />
                    </div>
                  </button>
                </div>

                <div
                  id="validations"
                  class="flex justify-between border-b border-solid mb-8"
                >
                  <pre class="text-cyan-500">
Validations to Pass: {{ steps.validations_required }}
                  </pre>
                  <button
                    @click="show(sectionKey, steps.step, 'validations')"
                    class="bg-cyan-500 hover:bg-gray-300 text-white hover:text-cyan-500 hover:border-transparent rounded text-xs px-4 m-4 h-12 w-44"
                  >
                    Complete This Step
                  </button>
                </div>

                <div
                  id="features"
                  class="flex justify-between border-b border-solid mb-8"
                >
                  <pre class="text-orange-500">
Features to Unlock:: {{ steps.unlocked_features }}
                  </pre>
                  <button
                    class="bg-orange-400 hover:bg-gray-300 text-white hover:text-orange-600 hover:border-transparent rounded text-xs px-4 m-4 h-12 w-44"
                  >
                    <div class="flex justify-between">
                      <span> Status:</span>
                      <LockClosedIcon class="w-4 ml-4" />
                    </div>
                  </button>
                </div>
              </div>
            </fieldset>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <BaseModal :open="section !== undefined">
    <div class="relative text-right p-3" :hidden="section === undefined">
      <button
        type="button"
        class="font-normal bg-gray-200 rounded-full w-8 m-1 p-1 font-bruno"
        @click="show(undefined, undefined, undefined)"
      >
        X
      </button>
    </div>
    <SectionOneStepOneQuestionsForm
      v-if="section === 1 && step === 1 && part === 'questions'"
    />
    <SectionOneStepOneValidationsForm
      v-if="section === 1 && step === 1 && part === 'validations'"
    />
    <SectionTwoStepOneQuestionsForm
      v-if="section === 2 && step === 1 && part === 'questions'"
    />
    <SectionTwoStepOneValidationsForm
      v-if="section === 2 && step === 1 && part === 'validations'"
    />
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { CheckIcon, LockClosedIcon } from "@heroicons/vue/20/solid";

import SectionOneStepOneQuestionsForm from "@components/onboarding/sectionOne/StepOneQuestionsForm.vue";
import SectionOneStepOneValidationsForm from "@components/onboarding/sectionOne/StepOneValidationsForm.vue";
import SectionTwoStepOneQuestionsForm from "@components/onboarding/sectionTwo/StepOneQuestionsForm.vue";
import SectionTwoStepOneValidationsForm from "@components/onboarding/sectionTwo/StepOneValidationsForm.vue";

import BaseModal from "@components/base/BaseModal.vue";
import { onboardingFlow } from "@helpers/dataModel/index";

const { user } = useAuth0();

const section = ref(undefined);
const step = ref(undefined);
const part = ref(undefined);

const show = (
  sectionKey: string | undefined,
  stepIndex: number | undefined,
  stepPart: string | undefined,
) => {
  const sectionNumber = sectionKey
    ? Number(sectionKey.split(" ")[1])
    : undefined;
  section.value = sectionNumber;
  step.value = stepIndex;
  part.value = stepPart;

  console.log({ section: section.value, step: step.value, part: part.value });
};
</script>
