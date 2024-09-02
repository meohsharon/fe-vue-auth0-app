<template>
  <div class="flex-grow text-center">
    <p class="mt-12 text-sm sm:text-base text-red-600">
      Hello {{ user.name }}. Complete the following sections to unlock features
    </p>

    <div id="'onboardingFlow'" class="mt-12 mx-12 text-left">
      <p>
        Number of Sections to complete: {{ Object.keys(onboardingFlow).length }}
      </p>

      <div id="section" v-for="(sections, key) of onboardingFlow" class="my-8">
        <fieldset class="border border-dashed rounded-md border-gray-300 p-3">
          <legend class="p-2">{{ key }}</legend>
          <div class="grid gap-x-8 gap-y-6 underline">
            <p>
              Number of Steps to complete in this section: {{ sections.length }}
            </p>
          </div>

          <div v-for="steps of sections" class="pl-8 mt-12">
            <fieldset
              class="border border-dashed rounded-md border-gray-300 p-3"
            >
              <legend class="p-2">Step {{ steps.step }}:</legend>

              <div id="step" class="pl-8">
                <pre>Questions to Answer: {{ steps.questions }}</pre>
                <pre>Validations to Pass: {{ steps.validations_required }}</pre>
                <pre>Features to Unlock:: {{ steps.unlocked_features }}</pre>
              </div>
            </fieldset>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { onboardingFlow } from "@helpers/dataModel/index";
import Avatar from "@components/Avatar.vue";

const { user } = useAuth0();
</script>
